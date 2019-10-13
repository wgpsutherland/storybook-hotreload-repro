import React from 'react';
import { Grid } from 'semantic-ui-react'
import SortLabel from './SortLabel'

const TodoSort = () => {
    return <Grid>
        <Grid.Row>
            <Grid.Column>
                <SortLabel name='name' />
                <SortLabel name='complete' />
            </Grid.Column>
        </Grid.Row>
    </Grid>
}

export default TodoSort;
