import store from "./store/configureStore";
import { addTask, removeTask, completedTask } from "./store/tasks";

store.dispatch(addTask({task: "Zadanie 1"}))
store.dispatch(addTask({task: "Zadanie 2"}))
console.log(store.getState())

store.dispatch(completedTask({id: 2}))
console.log(store.getState())

store.dispatch(removeTask({id: 1}))
console.log(store.getState())