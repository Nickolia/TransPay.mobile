const getSettingsRoot = (state) => state.settings


export const getSettingsCurrencySelector = (state) => getSettingsRoot(state).currency
export const getDecimalPlacesSelector = (state) => getSettingsRoot(state).decimalPlaces
