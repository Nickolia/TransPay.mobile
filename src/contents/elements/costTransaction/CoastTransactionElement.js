import React from 'react'
import { Text } from 'react-native'
import { compose } from 'recompose'

import styles from './coastTransaction.styles'
import { connect } from 'react-redux'
import {
    getDecimalPlacesSelector,
    getSettingsCurrencySelector,
} from '../../../selectors/settingsSelectors'
import { getDecimalPlaces } from '../../../services/SettingsServices'

const CoastTransactionElement = compose(
    connect(state => ({
        currency: getSettingsCurrencySelector(state),
        decimalPlaces: getDecimalPlacesSelector(state),
    })),
)(({ operation, sum, currency, decimalPlaces, style }) => (
    <Text style={[styles.text, operation === 'add'? styles.add : styles.remove, style]}>
        {!!operation && <Text>{operation === 'add' ? '+' : '-'}</Text>}
        {sum}{getDecimalPlaces(decimalPlaces)}{currency}
    </Text>
))

export default CoastTransactionElement
