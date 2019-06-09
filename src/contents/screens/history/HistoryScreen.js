import React from 'react'
import { ScrollView } from 'react-native'

import styles from './history.styles'
import HistoryListComponent from '../../components/historyList/HistoryListComponent'

const HistoryScreen = ({ history, onOpenTicket }) => (
    <ScrollView style={styles.container}>
        {history.map((item, index) => (
            <HistoryListComponent {...item} key={index} onPress={onOpenTicket} />
        ))}
    </ScrollView>
)

HistoryScreen.navigationOptions = {
    title: 'События',
    headerTintColor: '#000000',
    headerTitleStyle: {
        fontSize: 34,
        fontWeight: 'bold',
        fontStyle: 'normal',
        lineHeight: 41,
        letterSpacing: 0.41,
    },
}

export default HistoryScreen
