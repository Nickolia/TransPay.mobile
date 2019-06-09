import { compose, withProps } from 'recompose'
import HistoryScreen from '../../../contents/screens/history/HistoryScreen'

export default compose(
    withProps({
        history: [
            {
                date: '09/06/2019',
                data: [
                    {
                        name: 'Автобус №129',
                        date: 1560064932,
                        operation: 'remove',
                        sum: 35,
                        id: 1,
                    },
                    {
                        name: 'Автобус №128',
                        date: 1560064900,
                        operation: 'remove',
                        sum: 39,
                        id: 2,
                    },
                    {
                        name: 'Автобус №127',
                        date: 1560064000,
                        operation: 'remove',
                        sum: 40,
                        id: 3,
                    },
                    {
                        name: 'Пополнение',
                        date: 1560063000,
                        operation: 'add',
                        sum: 500,
                        id: 4,
                    },
                ],
            },
        ],
    }),
)(HistoryScreen)
