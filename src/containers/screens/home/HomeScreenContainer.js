import { compose, withHandlers, withProps } from 'recompose'
import { connect } from 'react-redux'
import HomeScreen from '../../../contents/screens/homePage/HomeScreen'
import { getCameraPermissions } from '../../../selectors/permissionsSelectors'

export default compose(
    connect(state => ({
        cameraPermission: getCameraPermissions(state),
    })),
    withHandlers({
        openScanScreen: ({ navigation }) => () => navigation.navigate('Scan'),
        openPayScreen: ({ navigation }) => () => navigation.navigate('Pay'),
    }),
    withProps({
        qrValue: '1231231231212',
    }),
)(HomeScreen)
