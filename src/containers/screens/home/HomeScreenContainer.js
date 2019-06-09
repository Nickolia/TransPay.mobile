import { compose, withHandlers, withProps } from 'recompose'
import { connect } from 'react-redux'
import HomeScreen from '../../../contents/screens/home/HomeScreen'
import { getCameraPermissionsSelector } from '../../../selectors/permissionsSelectors'
import { getBalanceProfileSelector } from '../../../selectors/profileSelectors'

const HomeScreenContainer = compose(
    connect(state => ({
        cameraPermission: getCameraPermissionsSelector(state),
        balance: getBalanceProfileSelector(state),
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

HomeScreenContainer.navigationOptions = {
    title: 'Главная',
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
        paddingLeft: 10
    },
}
export default HomeScreenContainer
