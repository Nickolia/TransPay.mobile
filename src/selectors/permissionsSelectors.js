const getPermissionsRoot = (state) => state.permissions


export const getCameraPermissionsSelector = (state) => getPermissionsRoot(state).camera
