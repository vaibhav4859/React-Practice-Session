// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

// we can divide our states into diff slices like counter etc.
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        decrement(state) {
            state.counter--;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const initialAuthState = { isAuthenticated: false, };

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        },
    },
});

// const counterReducer = (state = initialState, action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//     }

//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }

//     return state;
// }

const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
});
// combines multiple reducers into one big reducer behind the scenes
// due to multiple state slices we have multiple reducers

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;

// we must not manipulate it like state.counter++ bcz of object refrencing we must create a new onject and change it thhere and return that new oject like counter: state.counter + 1
// when using redux toolkit and writing function like createslice we can't accidently write this syntax
// bcz redux toolkit has internally another package imgur which will detect code like this state.counter++
// and automatically clone the existing state keep all the state which we are not editing, and override it
// basically it detects code like state.counter++, and create new object by cloning exisiting object and changes made in them