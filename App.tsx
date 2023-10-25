import "./nativewind-output";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "@pages/HomeScreen";
import SettingsScreen from "@pages/SettingsScreen";
import ReviewsScreen from "@pages/ReviewsScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHouse,
  faGear,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

const Tab = createBottomTabNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik: require("./assets/fonts/Rubik.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon icon={faHouse} color="" size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Reviews"
            component={ReviewsScreen}
            options={{
              tabBarLabel: "Reviews",
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon icon={faClipboard} color="" size={25} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: "Settings",
              tabBarIcon: ({ color, size }) => (
                <FontAwesomeIcon icon={faGear} color="" size={25} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
