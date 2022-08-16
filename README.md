# Redux Toolkit Basics

## Scripts used in Terminal:

npx create-react-app redux-toolkit-basics --template redux

## Step 1: Create a store:

In src folder, create app folder. In app folder create a file store.js

```
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
        // Add reducers here
  },
});
```

## Step 2: Import the store and provider in index.js:

To import the store and provider:

```
import { store } from "./app/store";
import { Provider } from "react-redux";
```

Next, you wrap Provider around the <App/> component and add store as a prop:

```
 <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
```

## Step 3: Create the features directory in src folder:

In features folder, create the counter folder: features/counter. In counter folder, create the counterSlice.js file.

A slice is a collection of reducer logic and actions for a single feature in the app. Ex: Blog might have a slice for posts and another slice for comments.

In counterSlice.js:

Create a slice:

```
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
```

## Step 4: Import the reducer into the store.js:

```
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

```
