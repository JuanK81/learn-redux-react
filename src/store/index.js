import{ createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState, //we can omit the key in modern js
    reducers: {
        increment(state) {                      //the methods take the state and the action, inthis case we omit the actions
            state.counter++;                    //here we can mutate the state instead of overwriting it. It's done behind the scenes.
        }, 
        decrement(state) {
            state.counter--;
        },
        increase(state, action) { //here we need the action to accept data
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    }
});

const store = configureStore({
    //reducer: { counter: counterSlice.reducer }  <<<<<  we create an object with all the reducers that we have and they'll be merged behind the scenes.
    reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;

