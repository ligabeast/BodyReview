import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export enum WeightUnit {
  KG = 1,
  LB = 0,
}

export enum HeightUnit {
  CM = 1,
  IN = 0, //Inches: A person who's 5 feet, 6 inches tall is 66 inches.
}

export enum SettingsType {
  TEXT,
  MODAL,
}

export enum UnitType {
  WEIGHT,
  HEIGHT,
}

export enum SettingIdentifier {
  NAME = "name",
  WEIGHT = "weight",
  HEIGHT = "height",
  BIRTHDAY = "birthday",
  EMAIL = "email",
  CHANGE_PASSWORD = "change_password",
  LANGUAGE = "language",
  UNITS = "units",
  CLEAR_DATA = "clear_data",
  NOTIFICATION = "notification",
  APP_PRESENTATION = "app_presentation",
  LOGOUT = "logout",
  DELETE_ACCOUNT = "delete_account",
}

export enum SelectionIdentifier {
  WEIGHT = "weight",
  HEIGHT = "height",
  LANGUAGE = "langugage",
}

export enum SettingsItemModalTypes {
  SELECTION,
  WARNING,
  REDIRECTION,
}

export enum Languages {
  EN = "en",
  GER = "ger",
}

export type UUID = string; //TODO

export interface SettingsItem {
  id: SettingIdentifier;
  displayText: string;
  type: SettingsType;
}

export interface SettingsBlock {
  title: string;
  icon: IconDefinition;
  settings: SettingsItem[];
}

export interface SettingsItemModalSelection<T> {
  displayText: string;
  id: SelectionIdentifier;
  values: {
    label: string;
    value: T;
  }[];
}

export interface SettingsItemModal {
  id: SettingIdentifier;
  type: SettingsItemModalTypes;
  target: SettingsItemModalSelection<HeightUnit | WeightUnit | Languages>[];
}

export interface Units<T> {
  value: number;
  unit: T;
  unitType: UnitType;
}

export interface SettingsData {
  [SettingIdentifier.NAME]: string | null;
  [SettingIdentifier.WEIGHT]: Units<WeightUnit> | null;
  [SettingIdentifier.HEIGHT]: Units<HeightUnit> | null;
  [SettingIdentifier.BIRTHDAY]: Date | null;
  [SettingIdentifier.EMAIL]: string | null;
  [SettingIdentifier.UNITS]: {
    [SelectionIdentifier.WEIGHT]: WeightUnit;
    [SelectionIdentifier.HEIGHT]: HeightUnit;
  };
  [SettingIdentifier.LANGUAGE]: Languages;
}

export type AllSettingTypes = SettingsData[keyof SettingsData];
