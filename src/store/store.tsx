import { configureStore, combineReducers, Action } from "redux-starter-kit";
import { todosReducer, TodosState } from './reducers/Todos.Reducer'
import { ThunkAction } from "redux-thunk";


export interface IStoreState {
    todosState: TodosState
}

export type AppThunk = ThunkAction<void, IStoreState, null, Action<string>>

export interface NormalizedObjects<T> {
    byId: { [id: string]: T };
    allIds: string[];
}

const reducer = combineReducers<IStoreState>({
    todosState: todosReducer
})

export const store = configureStore({
    reducer: reducer
});
