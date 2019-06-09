import React from 'react'
import { Image, View, Text } from 'react-native'

import styles from './ticket.styles'
import CoastTransactionElement from '../../elements/costTransaction/CoastTransactionElement'
import LinerButtonElement from '../../elements/linerButton/LinerButtonElement'

const TicketScreen = ({ logo, operation, sum, companyName, buttonText, isOpen, onPressButton, onPressSplash }) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={{ uri: logo }} style={styles.logo} resizeMode="contain" />
            <Text style={styles.companyName}>{companyName}</Text>
            <CoastTransactionElement operation={operation} sum={sum} style={styles.coast} />
        </View>
        <LinerButtonElement
            style={styles.button}
            colors={['rgb(66,147,33)', 'rgb(180,236, 81)']}
            onPress={onPressButton}
        >
            <Text style={styles.buttonContent}>{buttonText}</Text>
        </LinerButtonElement>
    </View>
)

TicketScreen.navigationOptions = {
    header: null,
}

export default TicketScreen
