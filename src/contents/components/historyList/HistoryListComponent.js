import React from 'react'
import HistoryListWrapperElement from '../../elements/historyListWrapper/HistoryListWrapperElement'
import HistoryListItemElement from '../../elements/historyListItem/HistoryListItemElement'

const HistoryListComponent = ({ date, data }) => (
    <HistoryListWrapperElement date={date}>
        {data.map((item, index) => (
            <HistoryListItemElement {...item} key={index} />
        ))}
    </HistoryListWrapperElement>
)

export default HistoryListComponent
