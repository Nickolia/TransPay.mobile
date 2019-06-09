import { Platform, StyleSheet } from 'react-native'
import { windowWidth } from '../../../constants/Layout'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    header: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    balance: {
        fontSize: 18,
        fontWeight: 'normal',
        fontStyle: 'normal',
        letterSpacing: 0.22,
        textAlign: 'center',
        color: '#000000',
        paddingBottom: 24,
    },
    coast: {
        fontSize: 36,
        fontWeight: '500',
        fontStyle: 'normal',
        letterSpacing: 0,
        textAlign: 'right',
    },
    buttonContent: {
        width: '100%',
        height: '100%',
        fontSize: 16,
        lineHeight: 48,
        fontWeight: '500',
        fontStyle: 'normal',
        letterSpacing: 0.19,
        textAlign: 'center',
        color: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 48,
        height: 48,
        borderRadius: 8,
        width: (windowWidth / 100) * 90,
    },
})
