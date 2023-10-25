import { MdiReactIconComponentType } from "mdi-react";
import React, { useState } from "react";
import { Button, View, TextInput, Text } from "react-native";

interface Props {
  title: string;
  icon: MdiReactIconComponentType;
}

export default function SettingsBlock(props: Props) {
  const Icon = props.icon;
  return (
    <View className="">
      <View className="border-b-2"></View>
      <View className="flex-row">
        <Text className="text-2xl font-[Rubik]">{props.title}</Text>
      </View>
    </View>
  );
}
