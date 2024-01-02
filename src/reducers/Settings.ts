import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  SettingsData,
  SettingIdentifier,
  HeightUnit,
  WeightUnit,
  Languages,
  SelectionIdentifier,
  UnitType,
} from "@src/Type";

const initialState: SettingsData = {
  [SettingIdentifier.NAME]: null,
  [SettingIdentifier.WEIGHT]: null,
  [SettingIdentifier.HEIGHT]: null,
  [SettingIdentifier.BIRTHDAY]: null,
  [SettingIdentifier.EMAIL]: null,
  [SettingIdentifier.UNITS]: {
    [SelectionIdentifier.HEIGHT]: HeightUnit.CM,
    [SelectionIdentifier.WEIGHT]: WeightUnit.KG,
  },
  [SettingIdentifier.LANGUAGE]: Languages.EN,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state[SettingIdentifier.NAME] = action.payload;
    },
    changeUnit: (
      state,
      action: PayloadAction<SettingsData[SettingIdentifier.UNITS]>
    ) => {
      state = { ...state, [SettingIdentifier.UNITS]: action.payload };
      // console.log("Payload");
      // console.log(action.payload);
      // console.log("REDUCER");
      // console.log(state);
    },
  },
});

export const { changeName, changeUnit } = settingsSlice.actions;
export default settingsSlice.reducer;
