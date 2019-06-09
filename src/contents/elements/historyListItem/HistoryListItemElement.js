import React from 'react'
import { Text, View } from 'react-native'

import styles from './historyListItem.styles'
import CoastTransactionElement from '../costTransaction/CoastTransactionElement'

const HistoryListItemElement = ({ name, date, operation, sum, id }) => (
    <View style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.info}>
            <CoastTransactionElement operation={operation} sum={sum} />
        </View>
    </View>
)

export default HistoryListItemElement
