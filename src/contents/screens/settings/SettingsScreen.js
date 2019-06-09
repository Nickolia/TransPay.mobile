import React from 'react'
import { Text, View } from 'react-native'

import styles from './settings.styles'

const SettingsScreen = () => (
    <View style={styles.container}>
        <Text>{' '}</Text>
    </View>
)

SettingsScreen.navigationOptions = {
    header: null,
}

export default SettingsScreen
