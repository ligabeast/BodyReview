enum WeightUnit {
  KG = 1,
  LB = 0,
}

enum HeightUnit {
  CM = 1,
  IN = 0, //Inches: A person who's 5 feet, 6 inches tall is 66 inches.
}

interface AccountData {
  name: string;
  weight: number;
  weightUnit: WeightUnit;
  height: number;
  heightUnit: HeightUnit;
  birthDay: Date;
  email: string;
}

export { WeightUnit, HeightUnit, AccountData };
