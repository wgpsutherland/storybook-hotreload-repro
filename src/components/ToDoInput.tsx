import React, { useState } from 'react';
import { createTodo } from '../store/reducers/Todos.Reducer';
import { useDispatch } from 'react-redux';
import uuid from "uuid";
import { Form, Segment } from 'semantic-ui-react'
import Button from './Button'

const TodoInput = () => {

    const dispatch = useDispatch();
    const [todoText, setTodoText] = useState<string>('');

    const onChange = (event: any) => {
        setTodoText(event.target.value);
    };

    const onSubmit = (event: any) => {

        event.preventDefault();

        if (todoText.trim() === '') return;

        let newTodo = {
            id: uuid.v4(),
            name: todoText,
            complete: false
        }

        dispatch(createTodo(newTodo))

        setTodoText('');
    };

    return (
        <Segment>
            <Form size='large' onSubmit={onSubmit}>
                <Form.Input
                    fluid
                    icon='check circle outline'
                    iconPosition='left'
                    placeholder='Add a todo'
                    type='text'
                    value={todoText}
                    onChange={onChange}
                />
                <Button color='teal' fluid size='large' type='submit'>Add</Button>
            </Form>
        </Segment>
    );
};

export default TodoInput;