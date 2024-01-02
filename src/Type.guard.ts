import { isUndefined } from "lodash";
import {
  HeightUnit,
  SelectionIdentifier,
  SettingsData,
  UnitType,
  Units,
  WeightUnit,
} from "./Type";
import isNil from "lodash/isNil";

export function isUnit(obj: any): obj is Units<WeightUnit | HeightUnit> {
  return (
    typeof obj === "object" &&
    !isUndefined(obj.value) &&
    typeof obj.value === "number" &&
    !isUndefined(obj.unit) &&
    typeof obj.unit === "number"
  );
}

export function isWeightUnit(obj: any): obj is Units<WeightUnit> {
  return isUnit(obj) && obj.unitType === UnitType.WEIGHT;
}

export function isHeightUnit(obj: any): obj is Units<HeightUnit> {
  return isUnit(obj) && obj.unitType === UnitType.HEIGHT;
}

const isSomeEnum =
  <T extends { [s: string]: unknown }>(e: T) =>
  (token: unknown): token is T[keyof T] =>
    Object.values(e).includes(token as T[keyof T]);

export const isWeightEnum = isSomeEnum(WeightUnit);
export const isHeightEnum = isSomeEnum(HeightUnit);

export function isSettingsDataUnit(obj: any): obj is SettingsData["units"] {
  return (
    typeof obj === "object" &&
    !isUndefined(obj[SelectionIdentifier.HEIGHT]) &&
    isWeightEnum(obj[SelectionIdentifier.HEIGHT]) &&
    !isUndefined(obj[SelectionIdentifier.WEIGHT]) &&
    isHeightEnum(obj[SelectionIdentifier.WEIGHT])
  );
}
