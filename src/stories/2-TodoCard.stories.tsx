import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import TodoCard from '../components/TodoCard'
import { ITodo } from "../types/Todos"
import { Card, Grid } from 'semantic-ui-react'

export default {
    title: 'TodoCard',
};

let completeTodo: ITodo = {
    id: "1234",
    name: "Hello!",
    complete: true
}

const withCardGroup = (storyFn: any) => <Grid.Column>
    <Card.Group itemsPerRow='2' style={{ 'marginBottom': '0' }}>
        {storyFn()}
    </Card.Group>
</Grid.Column>

const complete = () => <TodoCard todo={completeTodo} />

storiesOf('TodoCard', module)
    .addDecorator(withCardGroup)
    .add('complete', complete)
