import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState, //we can ommit the key in modern js
  reducers: {
    increment(state) {
      //the methods take the state and the action, inthis case we omit the actions
      state.counter++; //here we can mutate the state instead of overwriting it. It's done behind the scenes.
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      //here we need the action to accept data
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer; //we just need the reducer so it's the only thng we export
