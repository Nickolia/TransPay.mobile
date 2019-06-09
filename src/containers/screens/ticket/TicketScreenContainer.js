import { compose, withHandlers, withProps, withState } from 'recompose'
import TicketScreen from '../../../contents/screens/ticket/TicketScreen'

export default compose(
    withState('isOpen', 'toggleOpen', true),
    withHandlers({
        onPressButton: ({ toggleOpen }) => ({}) => {
            toggleOpen(true)
        },
        onPressSplash: ({ toggleOpen }) => ({}) => {
            toggleOpen(false)
        },
    }),
    withProps(({ navigation }) => ({
        companyName: navigation.getParam('companyName'),
        name: navigation.getParam('name'),
        date: navigation.getParam('date'),
        logo: navigation.getParam('logo'),
        operation: navigation.getParam('operation'),
        sum: navigation.getParam('sum'),
        id: navigation.getParam('id'),
        titleInfo: 'Справка по операции',
        buttonText: 'Показать билет',
    })),
)(TicketScreen)
