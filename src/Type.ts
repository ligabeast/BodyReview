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
  PROMPT,
}

export enum UnitType {
  WEIGHT,
  HEIGHT,
}

export enum SettingIdentifier {
  NAME,
  WEIGHT,
  HEIGHT,
  BIRTHDAY,
  EMAIL,
  CHANGE_PASSWORD,
  LANGUAGE,
  UNITS,
  CLEAR_DATA,
  NOTIFICATION,
  APP_PRESENTATION,
  LOGOUT,
  DELETE_ACCOUNT,
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
}

export type AllSettingTypes = SettingsData[keyof SettingsData];
