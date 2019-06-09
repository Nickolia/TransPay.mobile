import React, { Fragment } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

import styles from './scan.styles'
import InfoSplashElement from '../../elements/infoSplash/InfoSplashElement'

const BarCodeScannerComponent = ({ handleBarCodeScanned, status }) => (
    <Fragment>
        <BarCodeScanner
            onBarCodeScanned={status !== null ? null : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
        />
        <View style={styles.rect} />
    </Fragment>
)

const ScanScreen = ({ cameraPermission, failText, onPressSplash, ...props,  }) => (
    <View style={styles.container}>
        {!cameraPermission && <Text>{failText}</Text>}
        {cameraPermission && <BarCodeScannerComponent {...props} />}
        {props.status !== null && (
            <InfoSplashElement
                isSuccess={props.status === 'success'}
                onPress={onPressSplash}
            />
        )}
    </View>
)

ScanScreen.navigationOptions = {
    header: null,
}

export default ScanScreen
