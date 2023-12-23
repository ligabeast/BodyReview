import { SettingIdentifier, SettingsBlock, SettingsType } from "./Type";
import {
  faDatabase,
  faMobileScreenButton,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const SettingsBlocks: SettingsBlock[] = [
  {
    title: "My Data",
    icon: faDatabase,
    settings: [
      {
        id: SettingIdentifier.NAME,
        displayText: "Name",
        type: SettingsType.TEXT,
      },
      {
        id: SettingIdentifier.WEIGHT,
        displayText: "Weight",
        type: SettingsType.TEXT,
      },
      {
        id: SettingIdentifier.HEIGHT,
        displayText: "Height",
        type: SettingsType.TEXT,
      },
      {
        id: SettingIdentifier.BIRTHDAY,
        displayText: "Birthday",
        type: SettingsType.TEXT,
      },
      {
        id: SettingIdentifier.EMAIL,
        displayText: "Email",
        type: SettingsType.TEXT,
      },
      {
        id: SettingIdentifier.CHANGE_PASSWORD,
        displayText: "Change Password",
        type: SettingsType.PROMPT,
      },
    ],
  },
  {
    title: "App Settings",
    icon: faMobileScreenButton,
    settings: [
      {
        id: SettingIdentifier.LANGUAGE,
        displayText: "Language",
        type: SettingsType.PROMPT,
      },
      {
        id: SettingIdentifier.UNITS,
        displayText: "Units",
        type: SettingsType.PROMPT,
      },
      {
        id: SettingIdentifier.CLEAR_DATA,
        displayText: "Clear Data",
        type: SettingsType.PROMPT,
      },
      {
        id: SettingIdentifier.NOTIFICATION,
        displayText: "Notification",
        type: SettingsType.PROMPT,
      },
      {
        id: SettingIdentifier.APP_PRESENTATION,
        displayText: "App-Presentation",
        type: SettingsType.PROMPT,
      },
    ],
  },
  {
    title: "Account Data",
    icon: faUser,
    settings: [
      {
        id: SettingIdentifier.LOGOUT,
        displayText: "Logout",
        type: SettingsType.PROMPT,
      },
      {
        id: SettingIdentifier.DELETE_ACCOUNT,
        displayText: "Delete Account",
        type: SettingsType.PROMPT,
      },
    ],
  },
];
