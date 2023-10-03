import React, { useState } from "react";
import { Button, View, TextInput, Text } from "react-native";

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
    <View className="p-4 pt-12 space-y-4">
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
    </View>
  );
}
