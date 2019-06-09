import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import QRCode from 'react-native-qrcode'
import { LinearGradient } from 'expo'
import { windowWidth } from '../../../constants/Layout'

import styles from './home.styles'
import HistoryScreen from '../history/HistoryScreen'

const HomeScreen = ({ openScanScreen, openPayScreen, scannerText, qrValue, title, balance }) => (
    <View style={styles.container}>
        <ImageBackground
            resizeMode="contain"
            style={styles.ticket}
            source={require('../../../assets/images/TicketBackground/TicketBackground.png')}
        >
            <View style={styles.titleInner}>
                <Text style={styles.title}>{title}</Text>
                <LinearGradient style={styles.dot} colors={balance > 200 ? ['rgb(66, 147, 33)', 'rgb(180, 236, 81)'] : ['#F5515F', '#9F041B']} />
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

export default HomeScreen
