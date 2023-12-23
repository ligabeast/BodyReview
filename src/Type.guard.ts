import { HeightUnit, UnitType, Units, WeightUnit } from "./Type";
import isNil from "lodash/isNil";

export function isUnit(obj: any): obj is Units<WeightUnit | HeightUnit> {
  return (
    typeof obj === "object" &&
    !isNil(obj.value) &&
    typeof obj.value === "number" &&
    !isNil(obj.unit) &&
    typeof obj.unit === "number"
  );
}

export function isWeightUnit(obj: any): obj is Units<WeightUnit> {
  return isUnit(obj) && obj.unitType === UnitType.WEIGHT;
}

export function isHeightUnit(obj: any): obj is Units<HeightUnit> {
  return isUnit(obj) && obj.unitType === UnitType.HEIGHT;
}

export function isBirthday(obj: any): obj is Units<HeightUnit> {
  return;
}
