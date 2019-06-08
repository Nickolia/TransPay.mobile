import { StyleSheet } from 'react-native'
import * as Colors from '../../../constants/Colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    scanButton: {
        width: 298,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#693b16',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 11,
        marginBottom: 20,
    },
    scannerButtonText: {
        fontSize: 16,
        fontWeight: '900',
        fontStyle: 'normal',
        letterSpacing: 0,
        color: Colors.white,
    }
});
