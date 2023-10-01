import { Text, TextInput, View, Button } from "react-native";
import { useState } from "react";
import Test from "./src/components/Test";

export default function App() {
  const [TextInput, onChangeTextInput] = useState("");
  return <Test></Test>;
}
