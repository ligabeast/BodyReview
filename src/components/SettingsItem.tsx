import React, { useRef, useState } from "react";
import {
  Button,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardTypeOptions,
} from "react-native";
import {
  HeightUnit,
  SettingIdentifier,
  SettingsItem as SettingsItemType,
  SettingsType,
  WeightUnit,
} from "@src/Type";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Settings } from "@src/DummyData";
import { isHeightUnit, isUnit } from "@src/Type.guard";
import { isDate, isArray } from "lodash";
import { Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface Props extends SettingsItemType {}

export default function SettingsItem(props: Props) {
  const [itemValue, setItemValue] = useState(computeValue(props.id));
  const InputRef = useRef(null);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  function keyboardType(id: SettingIdentifier): KeyboardTypeOptions {
    if (id === SettingIdentifier.HEIGHT || id === SettingIdentifier.WEIGHT) {
      return "number-pad";
    }
    return "default";
  }

  function computeValue(id: SettingIdentifier): string | string[] | Date {
    const setting = Settings[id];
    let result = setting;
    if (isUnit(setting)) {
      result = isHeightUnit(setting)
        ? [setting.value, setting.unit === HeightUnit.CM ? "cm" : "in"]
        : [setting.value, setting.unit === WeightUnit.KG ? "kg" : "lb"];
    }
    return result;
  }
  return (
    <TouchableOpacity
      className="m-1 px-2 py-4 rounded-xl border flex flex-row items-center"
      onPress={() => {
        if (props.id === SettingIdentifier.BIRTHDAY) {
          setOpenDatePicker(!openDatePicker);
        }
        InputRef.current?.focus();
      }}
    >
      {openDatePicker ? (
        Platform.OS === "ios" ? (
          <View>
            <DateTimePicker
              onChange={(event) => {
                if (event.type == "set") {
                  const newDate = new Date(event.nativeEvent.timestamp);
                  setItemValue(newDate);
                  setDate(newDate);
                }
              }}
              display="spinner"
              value={date}
              mode="date"
            />
            <Button
              title="Submit"
              onPress={() => {
                setOpenDatePicker(false);
              }}
            />
          </View>
        ) : (
          <DateTimePicker
            onChange={(event) => {
              if (event.type === "set") {
                const newDate = new Date(event.nativeEvent.timestamp);
                setItemValue(newDate);
                setDate(newDate);
                setOpenDatePicker(false);
              }
              if (event.type === "dismissed") {
                setOpenDatePicker(false);
              }
            }}
            display="spinner"
            value={date}
            mode="date"
          />
        )
      ) : (
        <View
          className={`w-full flex flex-row items-center ${
            props.type === SettingsType.PROMPT ? "justify-between" : "space-x-4"
          }`}
        >
          <Text className="font-[Rubik] text-lg">{props.displayText}:</Text>

          {props.type === SettingsType.PROMPT ? (
            <FontAwesomeIcon icon={faArrowRight} />
          ) : isArray(itemValue) ? (
            <TouchableOpacity className="flex flex-row space-x-2 items-center">
              <TextInput
                keyboardType={keyboardType(props.id)}
                pointerEvents="none"
                className="font-[Rubik]"
                ref={InputRef}
              >
                {itemValue[0]}
              </TextInput>
              <Text className="font-[Rubik] font-thin">{itemValue[1]}</Text>
            </TouchableOpacity>
          ) : isDate(itemValue) ? (
            <Text className="font-[Rubik] font-thin">
              {itemValue.toLocaleDateString("en-us", {
                year: "numeric",
                day: "numeric",
                month: "short",
              })}
            </Text>
          ) : (
            <TextInput
              ref={InputRef}
              pointerEvents="none"
              keyboardType={keyboardType(props.id)}
              className="font-[Rubik]"
            >
              {itemValue}
            </TextInput>
          )}
        </View>
      )}
      {props.type === SettingsType.TEXT ? <Text></Text> : <Text></Text>}
    </TouchableOpacity>
  );
}
