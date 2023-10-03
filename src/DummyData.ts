import { HeightUnit, WeightUnit, AccountData } from "@src/Type";

const Account: AccountData = {
  name: "Baran",
  weight: 76,
  weightUnit: WeightUnit.KG,
  height: 175,
  heightUnit: HeightUnit.CM,
  birthDay: new Date("2001-26-12"),
  email: "Baran.ozbeyy02@gmail.com",
};

export { Account };
