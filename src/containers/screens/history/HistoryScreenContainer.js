import { compose, withHandlers, withProps } from 'recompose'
import HistoryScreen from '../../../contents/screens/history/HistoryScreen'

const HistoryScreenContainer = compose(
    withHandlers({
        onOpenTicket: ({ navigation }) => (item) => navigation.navigate('Ticket', {
            ...item,
            prevPage: 'History',
        }),
    }),
    withProps({
        history: [
            {
                date: '09/06/2019',
                data: [
                    {
                        name: 'Автобус №129',
                        date: 1560064932,
                        operation: 'remove',
                        companyName: 'Пассажиравтотранс',
                        logo: 'http://confspb.ru/uploads/images/BT_2018/logo_7.png',
                        sum: 35,
                        id: 1,
                    },
                    {
                        name: 'Автобус №128',
                        date: 1560064900,
                        operation: 'remove',
                        companyName: 'Пассажиравтотранс',
                        logo: 'http://confspb.ru/uploads/images/BT_2018/logo_7.png',
                        sum: 39,
                        id: 2,
                    },
                    {
                        name: 'Автобус №127',
                        date: 1560064000,
                        operation: 'remove',
                        companyName: 'Пассажиравтотранс',
                        logo: 'http://confspb.ru/uploads/images/BT_2018/logo_7.png',
                        sum: 40,
                        id: 3,
                    },
                    {
                        name: 'Пополнение',
                        date: 1560063000,
                        operation: 'add',
                        companyName: 'Пассажиравтотранс',
                        logo: 'http://confspb.ru/uploads/images/BT_2018/logo_7.png',
                        sum: 500,
                        id: 4,
                    },
                ],
            },
            {
                date: '08/06/2019',
                data: [
                    {
                        name: 'Автобус №129',
                        date: 1560064932,
                        operation: 'remove',
                        companyName: 'Пассажиравтотранс',
                        logo: 'http://confspb.ru/uploads/images/BT_2018/logo_7.png',
                        sum: 35,
                        id: 1,
                    },
                    {
                        name: 'Автобус №128',
                        date: 1560064900,
                        operation: 'remove',
                        companyName: 'Пассажиравтотранс',
                        logo: 'http://confspb.ru/uploads/images/BT_2018/logo_7.png',
                        sum: 39,
                        id: 2,
                    },
                    {
                        name: 'Автобус №127',
                        date: 1560064000,
                        operation: 'remove',
                        companyName: 'Пассажиравтотранс',
                        logo: 'http://confspb.ru/uploads/images/BT_2018/logo_7.png',
                        sum: 40,
                        id: 3,
                    },
                    {
                        name: 'Пополнение',
                        date: 1560063000,
                        operation: 'add',
                        companyName: 'Пассажиравтотранс',
                        logo: 'http://confspb.ru/uploads/images/BT_2018/logo_7.png',
                        sum: 500,
                        id: 4,
                    },
                ],
            },
        ],
    }),
)(HistoryScreen)

HistoryScreenContainer.navigationOptions = {
    title: 'События',
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

export default HistoryScreenContainer
