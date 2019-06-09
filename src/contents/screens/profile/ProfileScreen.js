import React from 'react'
import { Text, View } from 'react-native'

import styles from './profile.styles'

const ProfileScreen = () => (
    <View style={styles.container}>
        <Text>{' '}</Text>
    </View>
)

ProfileScreen.navigationOptions = {
    header: null,
}

export default ProfileScreen
