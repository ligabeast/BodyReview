import { HeightUnit, Languages, WeightUnit } from "@src/Type";
import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";

interface Item {
  label: string;
  value: WeightUnit | HeightUnit | Languages;
}

interface Props {
  placeholder?: Item;
  label: string;
  values: Item[];
  onChange: (val: WeightUnit | HeightUnit | Languages) => void;
}

export default function SelectionField(props: Props) {
  const [selectedValue, changeSelectedValue] = useState<Item | undefined>(
    props.placeholder
  );
  return (
    <View className="flex flex-row justify-center items-center">
      <Text className="font-[Rubik] text-lg">{props.label}:</Text>
      <RNPickerSelect
        placeholder={{}}
        value={selectedValue}
        style={{
          inputIOS: {
            height: 35,
            width: 120,
            textAlign: "center",
            fontSize: 16,
            borderWidth: 1,
            margin: 4,
            borderRadius: 12,
            paddingHorizontal: 5,
          },
          inputAndroid: {
            width: 200,
            textAlign: "center",
            fontSize: 16,
            borderWidth: 1,
            borderRadius: 12,
            paddingHorizontal: 5,
          },
          placeholder: {
            color: "lightgray",
            fontSize: 14,
          },
        }}
        onValueChange={(value) => {
          props.onChange(value);
        }}
        items={props.values}
      />
    </View>
  );
}
