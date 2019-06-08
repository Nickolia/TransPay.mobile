import { createAction } from '../utilits/reduxUtilits'
import { ACTION_PERMISSIONS_SET } from '../constants/actions/permissionsActionNames'

export const setPermission = (permissions) => (dispatch) => {
    dispatch(createAction(ACTION_PERMISSIONS_SET)(permissions))
}
