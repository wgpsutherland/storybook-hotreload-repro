import React from 'react';
import { useSelector } from 'react-redux';
import { Header } from 'semantic-ui-react'
import { getSelectedTodo } from '../store/selectors';

const TodoSelected = () => {

    const selectedTodo = useSelector(getSelectedTodo);

    if (!selectedTodo) return null;

    return <Header as='h4' color={selectedTodo.complete ? 'green' : 'red'}>
        {selectedTodo.name}
    </Header>
};

export default TodoSelected;
