import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import {TaskInterface} from "../components/Task"


const defaultTasks :TaskInterface[] = [

    { id: '1', title: 'Project 1', state: 'TASK_PINNED' },
    { id: '2', title: 'Project 2', state: 'TASK_PINNED' },
    { id: '3', title: 'Project 3', state: 'TASK_PINNED' },
    { id: '4', title: 'Project 4', state: 'TASK_INBOX' },
    { id: '5', title: 'Project 5', state: 'TASK_INBOX' },
    { id: '6', title: 'Project 6', state: 'TASK_INBOX' },
    { id: '7', title: 'Project 1', state: 'TASK_INBOX' },
]


const taskSlice = createSlice({
    name : "TaskList",
    initialState : defaultTasks ,
    reducers : {
        archiveTask:(state , action:PayloadAction<any>) => {
                return state.map((task) => task.id === action.payload ? {...task , state:"TASK_ARCHIVED"}: task)
        },

        pinnedTask : (state , action:PayloadAction<any>) => {
            return state.map((task) => task.id === action.payload ? {...task , state:"TASK_PINNED"}: task)
        },
        addTask : (state , action:PayloadAction<any>) => {
            let id = String(Math.random())
            return [
                ...state,
                {id : id , title : action.payload.input , state : "TASK_INBOX" }
            ]
        }
        
}
})

export const store = configureStore({
    reducer : taskSlice.reducer
});

export const {archiveTask , pinnedTask, addTask} = taskSlice.actions;
export {taskSlice};