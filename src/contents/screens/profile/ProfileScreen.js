import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './profile.styles'
import LinerButtonElement from '../../elements/linerButton/LinerButtonElement'
import CoastTransactionElement from '../../elements/costTransaction/CoastTransactionElement'

const ProfileScreen = ({buttonText, balanceText, balance, onPressBalance}) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.balance}>{balanceText}</Text>
            <CoastTransactionElement sum={balance} style={styles.coast} />
        </View>
        <LinerButtonElement
            style={styles.button}
            colors={['rgb(66,147,33)', 'rgb(180,236, 81)']}
            onPress={onPressBalance}
        >
            <Text style={styles.buttonContent}>{buttonText}</Text>
        </LinerButtonElement>
    </View>
)

ProfileScreen.navigationOptions = {
    header: null,
}

export default ProfileScreen
