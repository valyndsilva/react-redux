import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

// Redux consists of:  Actions (calls the reducer ->) , Reducers (changes the state in UI ->) and State (acts virtual db for your app in chrome)
// An event handler dispatches an action which is sent to the store and triggers the reducer inside the store to update the state in the UI

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //here we name all the different actions
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload; // amount is passed into the payload
    },
  },
});

//export actions
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;
//export reducers
export default counterSlice.reducer;
