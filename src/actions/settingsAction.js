import { createAction } from '../utilits/reduxUtilits'
import {
    ACTION_SETTINGS_CURRENCY_SET,
    ACTION_SETTINGS_DECIMAL_PLACES_SET,
} from '../constants/actions/settingsActionNames'

export const setCurrency = (currency) => (dispatch) => {
    dispatch(createAction(ACTION_SETTINGS_CURRENCY_SET)(currency))
}

export const setDecimalPlaces = (decimalPlaces) => (dispatch) => {
    dispatch(createAction(ACTION_SETTINGS_DECIMAL_PLACES_SET)(decimalPlaces))
}
