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
import { Provider } from "react-redux";
import Store from "@src/Store";

//TODO Move Pages Information in Settings and access via Redux

const Tab = createBottomTabNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik: require("./assets/fonts/Rubik.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
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
                headerShown: false,
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
                headerShown: false,
                tabBarLabel: "Settings",
                tabBarIcon: ({ color, size }) => (
                  <FontAwesomeIcon icon={faGear} color="" size={25} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
