import React from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import moment from 'moment'

import styles from './historyListItem.styles'
import CoastTransactionElement from '../costTransaction/CoastTransactionElement'

const DATE_FORMAT = 'YYYY-MM-DD HH:mm'

const HistoryListItemElement = ({ onPress, ...props }) => (
    <TouchableOpacity style={styles.container} onPress={() => onPress(props)}>
        <View style={styles.content}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.date}>{moment(props.date * 1000).format(DATE_FORMAT)}</Text>
        </View>
        <View style={styles.info}>
            <CoastTransactionElement operation={props.operation} sum={props.sum} />
            <Image
                source={require('../../../assets/images/Chevron/ChevronRight16.png')}
                style={styles.chevron}
                resizeMode="contain"
            />
        </View>
    </TouchableOpacity>
)

export default HistoryListItemElement
