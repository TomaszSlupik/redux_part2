import {createSlice} from "@reduxjs/toolkit";

// // Actions
// export const addTask = createAction("ADD_TASK")
// export const removeTask = createAction("REMOVE_TASK")
// export const completedTask = createAction("COMPLETED_TASK")

// console.log(addTask.type)

// 1 sposób
// Reducer
let id = 0;

// export default createReducer([], {
//     [addTask.type]: (state, action) => {
//         state.push({
//             id: ++id, 
//             task: action.payload.task,
//             completed: false,
//         })
//     },
//     [removeTask.type]: (state, action) => {
//         const index = state.findIndex(el => el.id === action.payload.id)
//         state.splice(index, 1)
//     }, 
//     [completedTask.type]: (state, action) => {
//         const index = state.findIndex(el => el.id === action.payload.id)
//         state[index].completed = true
//     }
// })

// 2 sposób
// export default function reducer(state = [], action) {
//     switch (action.type) {
//         case addTask.type:
//             return [
//                 ...state,
//                 {
//                     id: ++id,
//                     task: action.payload.task,
//                     completed: false,
//                 },
//             ];

//         case removeTask.type:
//             return state.filter((task) => task.id !== action.payload.id);

//         case completedTask.type:
//             return state.map((task) =>
//                 task.id === action.payload.id
//                     ? {
//                           ...task,
//                           completed: true,
//                       }
//                     : task
//             );

//         default:
//             return state;
//     }
// }

// 3 sposób 
const taskSlice = createSlice({
    name: "task",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            state.push({
                id: ++id, 
                task: action.payload.task,
                completed: false,
            })
        }, 
        removeTask: (state, action) => {
            const index = state.findIndex(el => el.id === action.payload.id)
            state.splice(index, 1)
        }, 
        completedTask: (state, action) => {
            const index = state.findIndex(el => el.id === action.payload.id)
            state[index].completed = true
        }
    }
})

export const {addTask, removeTask, completedTask}  = taskSlice.actions
export default taskSlice.reducer

