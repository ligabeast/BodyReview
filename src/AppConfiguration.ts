import {
  HeightUnit,
  SelectionIdentifier,
  SettingIdentifier,
  SettingsBlock,
  SettingsItemModal,
  SettingsItemModalTypes,
  SettingsType,
  WeightUnit,
} from "./Type";
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
        type: SettingsType.MODAL,
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
        type: SettingsType.MODAL,
      },
      {
        id: SettingIdentifier.UNITS,
        displayText: "Units",
        type: SettingsType.MODAL,
      },
      {
        id: SettingIdentifier.CLEAR_DATA,
        displayText: "Clear Data",
        type: SettingsType.MODAL,
      },
      {
        id: SettingIdentifier.NOTIFICATION,
        displayText: "Notification",
        type: SettingsType.MODAL,
      },
      {
        id: SettingIdentifier.APP_PRESENTATION,
        displayText: "App-Presentation",
        type: SettingsType.MODAL,
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
        type: SettingsType.MODAL,
      },
      {
        id: SettingIdentifier.DELETE_ACCOUNT,
        displayText: "Delete Account",
        type: SettingsType.MODAL,
      },
    ],
  },
];

export const SettingsModals: SettingsItemModal[] = [
  {
    id: SettingIdentifier.UNITS,
    type: SettingsItemModalTypes.SELECTION,
    target: [
      {
        id: SelectionIdentifier.HEIGHT,
        displayText: "Height",
        values: [
          {
            label: "Centimeters",
            value: HeightUnit.CM,
          },
          {
            label: "Inches",
            value: HeightUnit.IN,
          },
        ],
      },
      {
        id: SelectionIdentifier.WEIGHT,
        displayText: "Weight",
        values: [
          {
            label: "Kilogram",
            value: WeightUnit.KG,
          },
          {
            label: "Pound",
            value: WeightUnit.LB,
          },
        ],
      },
    ],
  },
];
