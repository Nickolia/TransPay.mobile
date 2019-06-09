import React from 'react'
import { Image, TouchableOpacity, ScrollView } from 'react-native'
import { LinearGradient } from 'expo'

import styles from './infoSplash.styles'

const InfoSplashElement = ({ isSuccess, onPress }) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <ScrollView style={styles.inner}>
            {isSuccess && (
                <Image
                    source={require('../../../assets/images/SuccessError/Success.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
            )}
            {!isSuccess && (
                <Image
                    source={require('../../../assets/images/SuccessError/Error.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
            )}
        </ScrollView>
    </TouchableOpacity>
)

export default InfoSplashElement
