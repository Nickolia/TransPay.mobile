import { compose, withHandlers, withProps } from 'recompose'
import { connect } from 'react-redux'
import HomeScreen from '../../../contents/screens/home/HomeScreen'
import { getCameraPermissionsSelector } from '../../../selectors/permissionsSelectors'

export default compose(
    connect(state => ({
        cameraPermission: getCameraPermissionsSelector(state),
    })),
    withHandlers({
        openScanScreen: ({ navigation }) => () => navigation.navigate('Scan'),
        openPayScreen: ({ navigation }) => () => navigation.navigate('Pay'),
    }),
    withProps({
        qrValue: '1231231231212',
        title: 'Ваш QR-код',
    }),
)(HomeScreen)
