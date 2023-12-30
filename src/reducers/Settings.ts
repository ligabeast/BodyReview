import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SettingsData, SettingIdentifier } from "@src/Type";

const initialState: SettingsData = {
  [SettingIdentifier.NAME]: null,
  [SettingIdentifier.WEIGHT]: null,
  [SettingIdentifier.HEIGHT]: null,
  [SettingIdentifier.BIRTHDAY]: null,
  [SettingIdentifier.EMAIL]: null,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state[SettingIdentifier.NAME] = action.payload;
    },
  },
});

export const { changeName } = settingsSlice.actions;
export default settingsSlice.reducer;
