import { compose, withHandlers, withProps } from 'recompose'
import ProfileScreen from '../../../contents/screens/profile/ProfileScreen'
import { connect } from 'react-redux'
import { getBalanceProfileSelector } from '../../../selectors/profileSelectors'
import { addBalanceAction } from '../../../actions/profileAction'

const ProfileScreenContainer = compose(
    connect(state => ({
        balance: getBalanceProfileSelector(state),
    }), {addBalance:addBalanceAction}),
    withHandlers({
        onPressBalance: ({balance, addBalance}) => () => {
            addBalance(balance + 100)
        }
    }),
    withProps(({ navigation }) => ({
        buttonText: 'Пополнить баланс',
    })),
)(ProfileScreen)


ProfileScreenContainer.navigationOptions = {
    title: 'Профиль',
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

export default ProfileScreenContainer
