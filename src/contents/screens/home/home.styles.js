import { StyleSheet } from 'react-native'
import { windowWidth } from '../../../constants/Layout'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    ticket: {
        width: windowWidth,
        height: windowWidth * 1.45,
    },
    titleInner: {
        width: '100%',
        height: ((windowWidth * 1.45) / 100) * 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: ((windowWidth * 1.45) / 100) * 14,
    },
    code: {
        width: '100%',
        height: ((windowWidth * 1.45) / 100) * 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 0.36,
        color: '#000000',
    },
    dot: {
        width: 12,
        height: 12,
        shadowRadius: 4,
        shadowOpacity: 1,
        marginLeft: 8,
        borderRadius: 6,
    },
})
