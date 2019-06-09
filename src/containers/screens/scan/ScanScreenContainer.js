import { compose, withHandlers, withProps, withState } from 'recompose'
import { connect } from 'react-redux'
import ScanScreen from '../../../contents/screens/scan/ScanScreen'
import { getCameraPermissionsSelector } from '../../../selectors/permissionsSelectors'
import ProfileScreenContainer from '../profile/ProfileScreenContainer'
import { getBalanceProfileSelector } from '../../../selectors/profileSelectors'

const ScanScreenContainer = compose(
    connect(state => ({
        cameraPermission: getCameraPermissionsSelector(state),
        balance: getBalanceProfileSelector(state),
    })),
    withState('status', 'onChangeStatus', null),
    withHandlers({
        handleBarCodeScanned: ({ balance, navigation, onChangeStatus }) => ({}) => {
            if (balance > 40) {
                onChangeStatus('success')
            } else {
                onChangeStatus('error')
            }
        },
        onPressSplash: ({ status, navigation, onChangeStatus }) => () => {
            onChangeStatus(null)
            if (status === 'success') {
                navigation.navigate('Home')
            } else {
                navigation.navigate('Profile')
            }
        },
    }),
    withProps({
        failText: 'У вас нет прав на использование камеры, добавьте разрешния',
    }),
)(ScanScreen)



ScanScreenContainer.navigationOptions = {
    title: 'Отсканировать',
    headerTintColor: '#000000',
    headerStyle: {
        borderBottomWidth: 1,
        height: 72,
        backgroundColor: 'rgba(249, 249, 249, 0.94)',
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        textAlign: 'left',
    },
    headerTitleStyle: {
        fontSize: 34,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 41,
        letterSpacing: 0.41,
        textAlign: 'left',
        width: '100%',
        paddingTop: 20,
        paddingLeft: 10,
    },
}

export default ScanScreenContainer
