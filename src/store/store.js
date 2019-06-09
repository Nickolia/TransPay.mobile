import { combineReducers } from 'redux'
import permissions from './reducers/permissionsReducer'
import settings from './reducers/settingsReducer'

export default combineReducers({
    permissions,
    settings,
})
