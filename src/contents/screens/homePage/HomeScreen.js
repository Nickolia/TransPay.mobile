import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import QRCode from 'react-native-qrcode';

import styles from './home.styles'

const HomeScreen = ({ openScanScreen, openPayScreen, scannerText, qrValue }) => (
    <View style={styles.container}>
        <TouchableOpacity
            style={styles.scanButton}
            onPress={openScanScreen}
        >
            <Text style={styles.scannerButtonText}>{scannerText}</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.scanButton}
            onPress={openPayScreen}
        >
            <Text style={styles.scannerButtonText}>{scannerText}</Text>
        </TouchableOpacity>

        <QRCode
            value={qrValue}
            size={200}
            bgColor='purple'
            fgColor='white'
        />
    </View>
)

HomeScreen.navigationOptions = {
    header: null,
}

export default HomeScreen
