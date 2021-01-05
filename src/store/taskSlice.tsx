import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import {TaskInterface} from "../components/Task"


const initialState:TaskInterface[] = [

    { id: '1', title: 'Play Football', state: 'TASK_INBOX' },
    { id: '2', title: 'Lunch', state: 'TASK_INBOX' },
    { id: '3', title: 'Work', state: 'TASK_INBOX' },
    { id: '4', title: 'Watch TV', state: 'TASK_INBOX' },
]


const taskSlice = createSlice({
    name : "TaskList",
    initialState : initialState,
    reducers : {
        archiveTask:(state , action:PayloadAction<any>) => {
                return state.map((task) => task.id === action.payload ? {...task , state:"TASK_ARCHIVED"}: task)
        },

        pinnedTask : (state , action:PayloadAction<any>) => {
            return state.map((task) => task.id === action.payload ? {...task , state:"TASK_PINNED"}: task)
        } ,

}
})

export const store = configureStore({
    reducer : taskSlice.reducer
});

export const {archiveTask , pinnedTask} = taskSlice.actions;
export {taskSlice};