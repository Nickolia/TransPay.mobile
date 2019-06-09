import React, { Fragment } from 'react'
import ListWrapperElement from '../../elements/listWrapper/ListWrapperElement'
import HistoryListItemElement from '../../elements/historyListItem/HistoryListItemElement'
import SeparatorTransactionElement
    from '../../elements/SeparatorTransaction/SeparatorTransactionElement'

const HistoryListComponent = ({ date, data, onPress }) => (
    <ListWrapperElement text={date}>
        {data.map((item, index) => (
            <Fragment key={index}>
                <HistoryListItemElement {...item} onPress={onPress}/>
                {index + 1 !== data.length && <SeparatorTransactionElement />}
            </Fragment>
        ))}
    </ListWrapperElement>
)

export default HistoryListComponent
