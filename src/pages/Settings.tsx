import React, { useState } from "react";
import { Button, View, TextInput, Text, ScrollView } from "react-native";
import { Account } from "@src/DummyData";
import SettingsBlock from "@components/SettingsBlock";
import DatabaseOutlineIcon from "mdi-react/DatabaseOutlineIcon";
import { mainColors } from "@styling/Color";

export default function App(props) {
  const [initialData, onChangeInitialData] = useState(Account);
  return (
    <ScrollView
      contentContainerStyle={{
        alignContent: "center",
        justifyContent: "center",
      }}
      style={{ backgroundColor: mainColors.beige }}
      className="h-full w-full flex-col px-5 py-10"
    >
      <Text className="text-lg text-center opacity-75 font-[Rubik]">
        Einstellungen
      </Text>
      <SettingsBlock
        title="Meine Daten"
        icon={DatabaseOutlineIcon}
      ></SettingsBlock>
    </ScrollView>
  );
}
