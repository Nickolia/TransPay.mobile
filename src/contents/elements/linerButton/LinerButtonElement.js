import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo'

import styles from './linerButton.styles'

const LinerButtonElement = ({ style, innerStyle, children, onPress, colors }) => (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
        <LinearGradient colors={colors} style={styles.color} />
        <View style={[styles.inner, innerStyle]}>{children}</View>
    </TouchableOpacity>
)

export default LinerButtonElement
