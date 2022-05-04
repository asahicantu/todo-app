import React, { Dispatch, SetStateAction } from 'react'
import { Todo } from './TodoTypes'

type TodoContextType = {
    appName: string,
    todos: Array<Todo>,
    loading: boolean,
    error: string,
    saveTodos: (todos: Array<Todo>) => void,
    completeTodo: (id: string) => void,
    deleteTodo: (id: string) => void,
    createTodo: (item: Todo) => void,
    searchText: string,
    setSearchText: Dispatch<SetStateAction<string>>
}


export type { TodoContextType }