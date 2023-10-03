import React, { useState } from "react";
import { Button, View, TextInput, Text } from "react-native";
import { mainColors } from "@styling/Color";

export default function App(props) {
  const [textInput, onChangeTextInput] = useState("");
  const [itemList, onChangeItemList] = useState<string[]>([]);
  function handleTextInput(newVal: string) {
    onChangeTextInput((oldVal) => newVal);
  }
  function addItemToList() {
    onChangeItemList((oldVal) => [...oldVal, textInput]);
    onChangeTextInput("");
  }
  return (
    <View className={"p-4 pt-12 space-y-4" + ` bg-[${mainColors.blue}]`}>
      <View className="flex-row items-center justify-center">
        <TextInput
          className="border mr-4 w-2/3 mr-1/5 border-black rounded-xl p-1 text-center"
          value={textInput}
          onChangeText={handleTextInput}
        />
        <Button title="Add to List" onPress={addItemToList} />
      </View>
      <View className="border" />
      <View>
        {itemList.length > 0 ? (
          itemList.map((val, index) => (
            <Text className="p-2 my-2 bg-purple-600 text-white" key={index}>
              {val}
            </Text>
          ))
        ) : (
          <Text className="p-2 bg-purple-600 text-white">Empty...</Text>
        )}
      </View>
      <View className="relative inline-block text-lg group">
        <Text className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
          <Text className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></Text>
          <Text className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></Text>
          <Text className="relative">Button Text</Text>
        </Text>
        <Text
          className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
          data-rounded="rounded-lg"
        ></Text>
      </View>
    </View>
  );
}
