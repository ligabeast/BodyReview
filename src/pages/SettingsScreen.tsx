import React, { useState } from "react";
import { Button, View, TextInput, Text, ScrollView } from "react-native";
import { Account } from "@src/DummyData";
import SettingsBlock from "@components/SettingsBlock";
import DatabaseOutlineIcon from "mdi-react/DatabaseOutlineIcon";
import { mainColors } from "@styling/Color";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function SettingsScreen(props) {
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
      <FontAwesomeIcon icon={faGear} />
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
