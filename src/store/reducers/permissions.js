import { createReducer } from '../../utilits/reduxUtilits'
import { ACTION_PERMISSIONS_SET } from '../../constants/actions/permissionsActionNames'

const defaultPermissions = {
    camera: false,
}

export default createReducer({
    initialState: defaultPermissions,
    actions: {
        [ACTION_PERMISSIONS_SET]: (state, permissions) => ({
            ...state,
            ...permissions,
        }),

    },
})
