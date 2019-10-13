import React from 'react';
import { Label, Icon } from 'semantic-ui-react'
import { useLocation, useHistory } from 'react-router-dom'
import { stringify } from 'query-string'
import { getSortFromSearchParams, cycleSort, useSearchParams } from '../utils'
import styled from '../styled'

const StyledLabel = styled(Label)`
    user-select: none;
`

interface ISortLabelProps {
    name: string;
}

const SortLabel: React.FC<ISortLabelProps> = ({ name }) => {

    const location = useLocation();
    const history = useHistory();
    const searchParams = useSearchParams();

    const { sortKey, sortOrder } = getSortFromSearchParams(searchParams);

    let isNewKey = sortKey !== name
    let isActiveKey = sortKey === name

    const handleOnClick = () => {
        let newSortOrder = cycleSort(sortOrder, isNewKey)
        let newSortKey = newSortOrder ? name : undefined
        let newSearch = stringify({ ...searchParams, sort_order: newSortOrder, sort_key: newSortKey })
        history.push({
            pathname: location.pathname,
            search: newSearch
        })
    }

    return <StyledLabel as='a' onClick={handleOnClick}>
        {sortOrder && isActiveKey &&
            <Icon name={sortOrder === 'asc' ? 'chevron up' : 'chevron down'} />
        }
        {name}
    </StyledLabel>
};

export default SortLabel;
