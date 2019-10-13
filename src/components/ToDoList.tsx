import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { IStoreState } from '../store/store'
import { Card } from 'semantic-ui-react'
import TodoCard from './TodoCard';
import { getSortFromSearchParams, useSearchParams } from '../utils'
import { makeAllTodosSortedSelector } from '../store/selectors'

const TodoList = () => {

    const isLoading = useSelector((state: IStoreState) => state.todosState.isLoading);

    const searchParams = useSearchParams();
    const sortInfo = getSortFromSearchParams(searchParams);

    const selectAllTodosSorted = useMemo(makeAllTodosSortedSelector, [])
    const allTodosSorted = useSelector((state: IStoreState) => selectAllTodosSorted(state, sortInfo))

    return <Card.Group itemsPerRow='2' style={{ 'marginBottom': '0' }}>
        {allTodosSorted.map(todo => <TodoCard key={todo.id} todo={todo} />)}
    </Card.Group>
};

export default TodoList;
