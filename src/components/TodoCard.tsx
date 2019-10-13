import React, { MouseEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { onSelectTodo, removeTodo, updateTodoName } from '../store/reducers/Todos.Reducer';
import { ITodo } from '../types/Todos';
import { Card, Icon, Input } from 'semantic-ui-react'

interface IProps {
    todo: ITodo
}

const TodoCard: React.FC<IProps> = ({ todo }) => {

    const dispatch = useDispatch();

    function handleInputClick(e: MouseEvent) {
        e.stopPropagation();
    }

    function handleInputChange(e: ChangeEvent, data: any) {
        let newName = data.value;
        dispatch(updateTodoName(newName, todo))
    }

    function handleDeleteClick(todo: ITodo, e: MouseEvent) {
        e.stopPropagation();
        dispatch(removeTodo(todo))
    }

    return <Card
        key={todo.id}
        color={todo.complete ? 'green' : 'red'}
        onClick={() => dispatch(onSelectTodo(todo))}
    >
        <Card.Content>
            <Input
                transparent
                defaultValue={todo.name}
                onClick={handleInputClick}
                onChange={handleInputChange}
            />
            <Icon
                name='delete'
                onClick={handleDeleteClick.bind(null, todo)}
            />
        </Card.Content>
    </Card>
};

export default TodoCard;
