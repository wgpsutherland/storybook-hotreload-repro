import { createSlice, PayloadAction } from "redux-starter-kit";
import { batch } from "react-redux"
import { AppThunk, NormalizedObjects } from "../store"
import { api } from "../../api/Todos.API"
import { ITodo } from "../../types/Todos"

export interface TodosState {
    isLoading: boolean;
    error: Error | null;
    todos: NormalizedObjects<ITodo>;
    selected: string | null;
}

const initialState: TodosState = {
    isLoading: false,
    error: null,
    todos: {
        byId: {},
        allIds: []
    },
    selected: null
};

const { actions, reducer } = createSlice({
    slice: "todos",
    initialState,
    reducers: {
        ADD_TODO(state: TodosState, action: PayloadAction<ITodo>) {
            state.todos.byId[action.payload.id] = action.payload
            state.todos.allIds.push(action.payload.id)
        },
        UPDATE_TODO(state: TodosState, action: PayloadAction<ITodo>) {
            state.todos.byId[action.payload.id] = action.payload
        },
        DELETE_TODO(state: TodosState, action: PayloadAction<ITodo>) {
            delete state.todos.byId[action.payload.id]
            state.todos.allIds = state.todos.allIds.filter(id => id !== action.payload.id)
        },
        GET_TODOS_START(state: TodosState) {
            state.isLoading = true;
            state.error = null;
        },
        GET_TODOS_SUCCESS(state: TodosState, action: PayloadAction<ITodo[]>) {
            state.todos.byId = {} // not sure if this is neccessary
            action.payload.forEach(todo => {
                state.todos.byId[todo.id] = todo
            })
            state.todos.allIds = action.payload.map(todo => todo.id)
            state.isLoading = false;
            state.error = null;
        },
        GET_TODOS_FAILURE(state: TodosState, action: PayloadAction<Error>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        SET_SELECTED_TODO(state: TodosState, action: PayloadAction<ITodo>) {
            state.selected = action.payload.id
        }
    }
})

export const todosReducer = reducer;

export const fetchTodos = (): AppThunk => async dispatch => {
    try {
        dispatch(actions.GET_TODOS_START());
        const response = await api.getTodos();
        dispatch(actions.GET_TODOS_SUCCESS(response));
    } catch (err) {
        dispatch(actions.GET_TODOS_FAILURE(err));
    }
};

export const createTodo = (todo: ITodo): AppThunk => async dispatch => {
    try {
        const response = await api.createTodo(todo);
        dispatch(actions.ADD_TODO(response))
    } catch (err) {
        console.log(err);
    }
}

export const removeTodo = (todo: ITodo): AppThunk => async dispatch => {
    try {
        await api.deleteTodo(todo);
        dispatch(actions.DELETE_TODO(todo))
    } catch (err) {
        console.log(err);
    }
}

export const updateTodoName = (newName: string, todo: ITodo): AppThunk => async dispatch => {
    try {
        let newTodo = { ...todo, name: newName };
        const response = await api.updateTodo(newTodo);
        dispatch(actions.UPDATE_TODO(response));
    } catch (err) {
        console.log(err);
    }
}

export const onSelectTodo = (todo: ITodo): AppThunk => async dispatch => {
    try {
        let newTodo = { ...todo, complete: !todo.complete };
        const response = await api.updateTodo(newTodo);
        batch(() => {
            dispatch(actions.UPDATE_TODO(response));
            dispatch(actions.SET_SELECTED_TODO(todo));
        })
    } catch (err) {
        console.log(err);
    }
}
