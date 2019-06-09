import React from 'react'
import { Image, View } from 'react-native'
import styles from './separatorTransaction.styles'

const SeparatorTransactionElement = () => (
    <View style={styles.container}>
        <Image
            source={require('../../../assets/images/TicketSeparator/LeftHalfCircle.png')}
            style={styles.leftHalfCircle}
            resizeMode="contain"
        />
        <Image
            source={require('../../../assets/images/TicketSeparator/Line.png')}
            style={styles.line}
            resizeMode="repeat"
        />
        <Image
            source={require('../../../assets/images/TicketSeparator/RightHalfCircle.png')}
            style={styles.rightHalfCircle}
            resizeMode="contain"
        />
    </View>
)

export default SeparatorTransactionElement
