/* eslint-disable global-require */
import { AppLoading } from 'expo'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import compose from 'recompose/compose'
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import axios from 'axios'
import thunk from 'redux-thunk'
import axiosMiddleware from 'redux-axios-middleware'
import React, { useState } from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import reducers from './src/store/store'
import AppNavigator from './src/navigation/AppNavigator'
import { getCameraPermission } from './src/services/PemissionsServices'
import { setPermission } from './src/actions/permissionAction'
import Constants from 'expo-constants';

const client = axios.create({
    baseURL: 'https://api.github.com',
    responseType: 'json'
})

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        applyMiddleware(axiosMiddleware(client)),
    ),
)

const getAllPermissions = async () => {
    const cameraStatus = await getCameraPermission()
    store.dispatch(
        setPermission({
            camera: cameraStatus === 'granted',
        }),
    )
}

const loadResourcesAsync = async () => {
    await Promise.all([
        Asset.loadAsync([
            require('./src/assets/images/robot-dev.png'),
            require('./src/assets/images/robot-prod.png'),
        ]),
        Font.loadAsync({
            ...Ionicons.font,
            'space-mono': require('./src/assets/fonts/SpaceMono-Regular.ttf'),
        }),
        getAllPermissions(),
    ])
}

const handleLoadingError = async (error: Error) => {
    console.warn(error)
}

const handleFinishLoading = async setLoadingComplete => {
    setLoadingComplete(true)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

export default function App({ skipLoadingScreen }) {
    const [isLoadingComplete, setLoadingComplete] = useState(false)
    console.log(Constants.installationId)

    return (
        <Provider store={store}>
            {!isLoadingComplete && !skipLoadingScreen && (
                <AppLoading
                    startAsync={loadResourcesAsync}
                    onError={handleLoadingError}
                    onFinish={() => handleFinishLoading(setLoadingComplete)}
                />
            )}
            {!(!isLoadingComplete && !skipLoadingScreen) && (
                <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                    <AppNavigator />
                </View>
            )}
        </Provider>
    )
}
