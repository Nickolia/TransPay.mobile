import { combineReducers } from 'redux'
import permissions from './reducers/permissionsReducer'
import settings from './reducers/settingsReducer'
import profile from './reducers/profileReducer'

export default combineReducers({
    permissions,
    settings,
    profile,
})
