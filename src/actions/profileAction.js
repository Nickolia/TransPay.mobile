import { createAction } from '../utilits/reduxUtilits'
import {
    ACTION_PROFILE_BALANCE_SET,
} from '../constants/actions/profileActionNames'

export const addBalanceAction = (balance) => (dispatch) => {
    console.log(balance)
    dispatch(createAction(ACTION_PROFILE_BALANCE_SET)(balance))
}
