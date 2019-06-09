import { StyleSheet } from 'react-native'
import { windowWidth } from '../../../constants/Layout'

export default StyleSheet.create({
    container: {
        height: 16,
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
    },
    leftHalfCircle: {
        width: 8,
        height: 16,
        resizeMode: 'contain',
    },
    rightHalfCircle: {
        width: 8,
        height: 16,
        resizeMode: 'contain',
    },
    line: {
        width: windowWidth - 18,
        height: 1,
    },
})
