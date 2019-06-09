import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import QRCode from 'react-native-qrcode'
import { LinearGradient } from 'expo'
import { windowWidth } from '../../../constants/Layout'

import styles from './home.styles'

const HomeScreen = ({ openScanScreen, openPayScreen, scannerText, qrValue, title }) => (
    <View style={styles.container}>
        <ImageBackground
            resizeMode="contain"
            style={styles.ticket}
            source={require('../../../assets/images/TicketBackground/TicketBackground.png')}
        >
            <View style={styles.titleInner}>
                <Text style={styles.title}>{title}</Text>
                <LinearGradient style={styles.dot} colors={['#F5515F', '#9F041B']} />
            </View>
            <View style={styles.code}>
                <QRCode
                    value={qrValue}
                    size={(windowWidth * 0.53)}
                    bgColor="black"
                    fgColor="white"
                />
            </View>
        </ImageBackground>
    </View>
)

HomeScreen.navigationOptions = {
    header: null,
}

export default HomeScreen
