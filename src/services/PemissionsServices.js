import * as Permissions from 'expo-permissions';

export const getCameraPermission = async () => {
    try {
        const { status } = await Permissions.askAsync(Permissions.CAMERA)
        return status
    } catch (e) {
        console.log(e)
        return 'fail'
    }
}

