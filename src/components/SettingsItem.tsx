import React, { useRef, useState } from "react";
import {
  Button,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardTypeOptions,
  Modal,
} from "react-native";
import {
  AllSettingTypes,
  HeightUnit,
  SettingIdentifier,
  SettingsItem as SettingsItemType,
  SettingsType,
  WeightUnit,
} from "@src/Type";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { isHeightUnit, isUnit } from "@src/Type.guard";
import { isDate, isArray, isNull, isUndefined, isString } from "lodash";
import { Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useAppSelector } from "@src/Store";
import SettingsItemModal from "./SettingsItemModal";

interface Props extends SettingsItemType {}

export default function SettingsItem(props: Props) {
  const settingValue = useAppSelector(
    (state): AllSettingTypes => state.settings[props.id]
  );
  const [itemValue, setItemValue] = useState(computeValue(settingValue));

  const inputRef = useRef<TextInput>(null);
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState(new Date());

  function keyboardType(id: SettingIdentifier): KeyboardTypeOptions {
    if (id === SettingIdentifier.HEIGHT || id === SettingIdentifier.WEIGHT) {
      return "number-pad";
    }
    return "default";
  }

  function computeValue(
    value: AllSettingTypes
  ): string | string[] | Date | null {
    if (isNull(value)) {
      return "";
    }
    if (isUnit(value)) {
      // Index 0: value, Index 1: unit
      return isHeightUnit(value)
        ? [value.value.toString(), value.unit === HeightUnit.CM ? "cm" : "in"]
        : [value.value.toString(), value.unit === WeightUnit.KG ? "kg" : "lb"];
    }
    if (isString(value)) {
      return value;
    }
    return null;
  }

  function handleDateTimePickerOnChange(event) {
    if (event.type == "set") {
      const newDate = new Date(event.nativeEvent?.timestamp ?? "");
      setDate(newDate);
      setItemValue(newDate);
      if (Platform.OS !== "ios") {
        setOpenDatePicker(false);
      }
    }
    if (event.type === "dismissed" && Platform.OS !== "ios") {
      setOpenDatePicker(false);
    }
  }

  function handleItemOnPress(event) {
    if (props.type === SettingsType.TEXT) {
      if (props.id === SettingIdentifier.BIRTHDAY) {
        setOpenDatePicker(true);
      }
    } else if (props.type === SettingsType.MODAL) {
      setOpenModal(!openModal);
    }
    inputRef.current?.focus();
  }

  return (
    <TouchableOpacity
      className="m-1 px-2 py-4 rounded-xl border flex flex-row items-center"
      onPress={handleItemOnPress}
    >
      {openDatePicker && (
        <View>
          <DateTimePicker
            onChange={handleDateTimePickerOnChange}
            display="spinner"
            value={date}
            mode="date"
          />
          {Platform.OS === "ios" && (
            <Button
              title="Submit"
              onPress={() => {
                setOpenDatePicker(false);
              }}
            />
          )}
        </View>
      )}
      <Modal transparent={true} visible={openModal} animationType="slide">
        <SettingsItemModal
          id={props.id}
          displayText={props.displayText}
          closeModal={() => {
            setOpenModal(false);
          }}
        />
      </Modal>

      <View
        className={`w-full flex flex-row items-center ${
          props.type === SettingsType.MODAL ? "justify-between" : "space-x-4"
        }`}
      >
        <Text className="font-[Rubik] text-lg">{props.displayText}:</Text>

        {props.type === SettingsType.MODAL ? (
          <FontAwesomeIcon icon={faArrowRight} />
        ) : isArray(itemValue) ? (
          <TouchableOpacity className="flex flex-row space-x-2 items-center">
            <TextInput
              keyboardType={keyboardType(props.id)}
              pointerEvents="none"
              className="font-[Rubik]"
              ref={inputRef}
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
            ref={inputRef}
            pointerEvents="none"
            keyboardType={keyboardType(props.id)}
            className="font-[Rubik]"
          >
            {itemValue}
          </TextInput>
        )}
      </View>
    </TouchableOpacity>
  );
}
