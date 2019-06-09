import { createReducer } from '../../utilits/reduxUtilits'
import {
    ACTION_SETTINGS_CURRENCY_SET,
    ACTION_SETTINGS_DECIMAL_PLACES_SET,
} from '../../constants/actions/settingsActionNames'

const defaultSettings = {
    currency: '₽',
    decimalPlaces: 2,
}

export default createReducer({
    initialState: defaultSettings,
    actions: {
        [ACTION_SETTINGS_CURRENCY_SET]: (state, currency) => ({
            ...state,
            ...currency,
        }),
        [ACTION_SETTINGS_DECIMAL_PLACES_SET]: (state, decimalPlaces) => ({
            ...state,
            ...decimalPlaces,
        }),

    },
})
