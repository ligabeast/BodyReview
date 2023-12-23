import React, { useState } from "react";
import { Button, View, TextInput, Text, ScrollView } from "react-native";
import { Account } from "@src/DummyData";
import SettingsBlock from "@components/SettingsBlock";
import { mainColors } from "@styling/Color";
import { SettingsBlocks } from "@src/Settings";

//TODO access to Settings via redux

export default function SettingsScreen(props) {
  const [initialData, onChangeInitialData] = useState(Account);
  return (
    <ScrollView
      contentContainerStyle={{
        alignContent: "center",
        justifyContent: "center",
      }}
      style={{ backgroundColor: mainColors.beige }}
      className="h-full w-full flex flex-col space-y-2 px-2"
    >
      <Text className="text-lg text-center opacity-75 font-[Rubik] pt-10">
        Settings
      </Text>
      <View className="flex flex-col justify-center space-y-4 pb-6">
        {SettingsBlocks.map((item, index) => (
          <SettingsBlock
            title={item.title}
            icon={item.icon}
            settings={item.settings}
            key={index}
          ></SettingsBlock>
        ))}
      </View>
    </ScrollView>
  );
}
