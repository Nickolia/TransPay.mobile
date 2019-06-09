import { createReducer } from '../../utilits/reduxUtilits'
import {
    ACTION_PROFILE_BALANCE_SET,
    ACTION_PROFILE_TICKET_SET,
} from '../../constants/actions/profileActionNames'

const defaultProfile = {
    balance: 0,
    history: [],
}

export default createReducer({
    initialState: defaultProfile,
    actions: {
        [ACTION_PROFILE_BALANCE_SET]: (state, balance) => ({
            ...state,
            balance,
        }),
        [ACTION_PROFILE_TICKET_SET]: (state, history) => ({
            ...state,
            history,
        }),

    },
})
