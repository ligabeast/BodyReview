import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

import Test from "./src/components/Test";

export default function App() {
  return (
    <View className="bg-black">
      <Text className="text-blue-600">
        Open up App.js to start working on your app!!
      </Text>
      <Test />
      <StatusBar style="auto" />
    </View>
  );
}
