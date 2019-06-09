import React, { Fragment } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

import styles from './scan.styles'

const BarCodeScannerComponent = ({ handleBarCodeScanned, isConfirm }) => (
    <Fragment>
        <BarCodeScanner
            onBarCodeScanned={isConfirm ? null : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
        />
        <View style={styles.rect} />
    </Fragment>
)

const ScanScreen = ({ cameraPermission, failText, ...props }) => (
    <View style={styles.container}>
        {!cameraPermission && <Text>{failText}</Text>}
        {cameraPermission && <BarCodeScannerComponent {...props} />}
    </View>
)

ScanScreen.navigationOptions = {
    header: null,
}

export default ScanScreen
