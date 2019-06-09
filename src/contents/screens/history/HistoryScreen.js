import React from 'react'
import { ScrollView } from 'react-native'

import styles from './history.styles'
import HistoryListComponent from '../../components/historyList/HistoryListComponent'

const HistoryScreen = ({ history }) => (
    <ScrollView style={styles.container}>
        {history.map((item, index) => (
            <HistoryListComponent {...item} key={index} />
        ))}
    </ScrollView>
)

HistoryScreen.navigationOptions = {
    header: null,
}

export default HistoryScreen
