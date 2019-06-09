import React from 'react'
import { Text, View } from 'react-native'

import styles from './historyListWrapper.styles'

const HistoryListWrapperElement = ({ date, children }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{date}</Text>
        {children}
    </View>
)

export default HistoryListWrapperElement
