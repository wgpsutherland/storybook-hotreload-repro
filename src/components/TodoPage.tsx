import React from 'react';
// import logo from '../../assets/images/logo.svg';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
import TodoSelected from './TodoSelected';
import { Grid, Header } from 'semantic-ui-react'
import TodoSort from './TodoSort'

const TodoPage = () => {
    return (
        <Grid textAlign='center'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center'>
                    Todos
                </Header>
                <TodoInput />
                <TodoSort />
                <TodoSelected />
                <TodoList />
            </Grid.Column>
        </Grid>
    );
}

export default TodoPage;
