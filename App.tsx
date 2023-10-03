import Settings from "@pages/Settings";
import "./nativewind-output";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const customTextProps = {
  style: {
    fontSize: 16,
    fontFamily: "Rubik",
    color: "black",
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik: require("./assets/fonts/Rubik.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Settings></Settings>;
  }
}
