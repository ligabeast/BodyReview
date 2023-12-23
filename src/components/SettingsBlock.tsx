import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Button, View, TextInput, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { SettingsItem as SettingsItemType } from "@src/Type";
import SettingsItem from "@src/components/SettingsItem";

interface Props {
  title: string;
  icon: IconDefinition;
  settings: SettingsItemType[];
}

export default function SettingsBlock(props: Props) {
  return (
    <View className="my-2 mx-1">
      <View className="border-b-2"></View>
      <View className="flex justify-center">
        <View className="flex flex-row items-center space-x-2">
          <Text className="text-2xl font-[Rubik]">{props.title}</Text>
          <FontAwesomeIcon icon={props.icon} />
        </View>
        <View>
          {props.settings.map((i) => (
            <SettingsItem
              id={i.id}
              displayText={i.displayText}
              type={i.type}
              key={i.id}
            ></SettingsItem>
          ))}
        </View>
      </View>
    </View>
  );
}
