import React, { useState } from "react";
import { Button, View, TextInput, Text } from "react-native";
import {
  AllSettingTypes,
  HeightUnit,
  Languages,
  SelectionIdentifier,
  SettingIdentifier,
  SettingsItemModalSelection,
  SettingsItemModalTypes,
  WeightUnit,
} from "@src/Type";
import { mainColors } from "@styling/Color";
import { SettingsModals } from "@src/AppConfiguration";
import SettingsSelectionField from "./SettingsSelectionField";
import { useAppSelector } from "@src/Store";
import { useAppDispatch } from "@src/Store";
import { changeUnit } from "@src/reducers/Settings";

import {
  isHeightEnum,
  isSettingsDataUnit,
  isWeightEnum,
} from "@src/Type.guard";

interface Props {
  id: SettingIdentifier;
  displayText: string;
  closeModal: () => void;
}

interface Item {
  label: string;
  value: WeightUnit | HeightUnit | Languages;
}

export default function SettingsItemModal(props: Props) {
  const modal = SettingsModals.find((e) => e.id === props.id)!;
  const settingValue = useAppSelector(
    (state): AllSettingTypes => state.settings[modal.id]
  );
  const selectedValues: {
    [SelectionIdentifier.HEIGHT]?: HeightUnit;
    [SelectionIdentifier.WEIGHT]?: WeightUnit;
    [SelectionIdentifier.LANGUAGE]?: Languages;
  } = {};
  const dispatch = useAppDispatch();

  function itemParse(
    item: SettingsItemModalSelection<WeightUnit | HeightUnit | Languages>
  ): Item | null {
    if (
      isSettingsDataUnit(settingValue) &&
      (item.id === SelectionIdentifier.HEIGHT ||
        item.id === SelectionIdentifier.WEIGHT)
    ) {
      const selectionIdentifier = item.id;
      return (
        item.values.find(
          (i) => i.value === settingValue[selectionIdentifier]
        ) ?? null
      );
    }
    return null;
  }

  return (
    <View
      style={{
        backgroundColor: mainColors["beige"],
      }}
      className="mt-auto h-1/3 rounded-t-md flex justify-center items-center"
    >
      <View className="flex flex-col items-center">
        <Text className="font-[Rubik] text-lg">{props.displayText}</Text>
        {modal.type === SettingsItemModalTypes.SELECTION &&
          modal.target.map((item, index) => (
            <SettingsSelectionField
              onChange={(val) => {
                if (
                  item.id === SelectionIdentifier.HEIGHT &&
                  isHeightEnum(val)
                ) {
                  selectedValues[item.id] = val;
                }
                if (
                  item.id === SelectionIdentifier.WEIGHT &&
                  isWeightEnum(val)
                ) {
                  selectedValues[item.id] = val;
                }
              }}
              key={index}
              placeholder={itemParse(item) ?? undefined}
              label={item.displayText}
              values={item.values}
            />
          ))}
        <View className="flex flex-row justify-center space-x-2">
          <Button
            title="cancle"
            onPress={() => {
              props.closeModal();
            }}
          />
          <Button
            title="submit"
            onPress={() => {
              console.log("submit");
              if (
                props.id === SettingIdentifier.UNITS &&
                isSettingsDataUnit(settingValue)
              ) {
                const units = {
                  [SelectionIdentifier.HEIGHT]:
                    selectedValues[SelectionIdentifier.HEIGHT] ??
                    settingValue[SelectionIdentifier.HEIGHT],
                  [SelectionIdentifier.WEIGHT]:
                    selectedValues[SelectionIdentifier.WEIGHT] ??
                    settingValue[SelectionIdentifier.WEIGHT],
                };
                dispatch(changeUnit(units));
              }
              props.closeModal();
            }}
          />
        </View>
      </View>
    </View>
  );
}
