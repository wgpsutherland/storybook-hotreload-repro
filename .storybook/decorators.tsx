import React from 'react';
import Provider from '../src/Provider'
import { Grid } from 'semantic-ui-react'

export const withProvider = (storyFn: any) => <Provider>
    {storyFn()}
</Provider>

export const withGrid = (storyFn: any) => <Grid columns='equal' padded textAlign='center'>
    {storyFn()}
</Grid>
