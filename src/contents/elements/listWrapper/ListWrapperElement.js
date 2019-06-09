import React from 'react'
import { Text, View } from 'react-native'

import styles from './listWrapper.styles'

const ListWrapperElement = ({ text, children }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        {children}
    </View>
)

export default ListWrapperElement
