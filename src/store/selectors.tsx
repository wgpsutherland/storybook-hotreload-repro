import { IStoreState } from "./store"
import { orderBy } from 'lodash'
import { SortInfo } from "../types/General"
import { createSelector } from "reselect"
import { ITodo } from "../types/Todos"

export const getSelectedTodo = (state: IStoreState) =>
    state.todosState.selected ? state.todosState.todos.byId[state.todosState.selected] : undefined

const getAllTodos = (state: IStoreState) => state.todosState.todos.allIds.map(id => state.todosState.todos.byId[id])

const getSortInfo = (_state: IStoreState, sortInfo: SortInfo) => sortInfo

const getSortedTodos = (todosById: ITodo[], { sortKey, sortOrder }: SortInfo) => {
    if (!sortKey) return todosById
    return orderBy(todosById, [sortKey], sortOrder)
}

export const makeAllTodosSortedSelector = () => createSelector(
    getAllTodos,
    getSortInfo,
    getSortedTodos
)
