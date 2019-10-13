import axios from './API'
import { ITodo } from "../types/Todos"

async function getTodos(): Promise<ITodo[]> {

    const url = "todos"

    try {
        const response = await axios.get<ITodo[]>(url);
        // await sleep(1000)
        return response.data;
    } catch (err) {
        throw err;
    }
}

async function createTodo(data: ITodo): Promise<ITodo> {

    const url = "todos"

    try {
        const response = await axios.post<ITodo>(url, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

async function deleteTodo(data: ITodo): Promise<ITodo> {

    const url = `todos/${data.id}`;

    try {
        const response = await axios.delete<ITodo>(url);
        return response.data;
    } catch (err) {
        throw err;
    }
}

async function updateTodo(data: ITodo): Promise<ITodo> {

    const url = `todos/${data.id}`;

    try {
        const response = await axios.put<ITodo>(url, data);
        console.log(response);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export const api = {
    getTodos,
    createTodo,
    deleteTodo,
    updateTodo
}
