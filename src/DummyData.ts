import { HeightUnit, WeightUnit, SettingsData, UnitType } from "@src/Type";
import { SettingIdentifier } from "@src/Type";

const Settings: SettingsData = {
  [SettingIdentifier.NAME]: "Baran",
  [SettingIdentifier.WEIGHT]: {
    value: 76,
    unit: WeightUnit.KG,
    unitType: UnitType.WEIGHT,
  },
  [SettingIdentifier.HEIGHT]: {
    value: 175,
    unit: HeightUnit.CM,
    unitType: UnitType.HEIGHT,
  },
  [SettingIdentifier.BIRTHDAY]: new Date("2001-26-12"),
  [SettingIdentifier.EMAIL]: "Baran.ozbeyy02@gmail.com",
};

export { Settings };
