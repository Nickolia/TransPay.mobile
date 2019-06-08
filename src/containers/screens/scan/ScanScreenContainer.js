import { compose, withProps, withHandlers, withState } from 'recompose'
import { connect } from 'react-redux'
import ScanScreen from '../../../contents/screens/scanPage/ScanScreen'
import { getCameraPermissions } from '../../../selectors/permissionsSelectors'

export default compose(
    connect(state => ({
        cameraPermission: getCameraPermissions(state),
    })),
    withState('isConfirm', 'onChangeStatus', false),
    withHandlers({
        handleBarCodeScanned: ({ onChangeStatus, navigation }) => ({ type, data }) => {
            console.log(type, data)
            onChangeStatus(true)
            setTimeout(() => navigation.navigate('Home'), 300)

        },
    }),
    withProps({
        failText: 'У вас нет прав на использование камеры, добавьте разрешния',
    }),
)(ScanScreen)
