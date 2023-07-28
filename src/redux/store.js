import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./dataReducer";

// Combine your reducers
const rootReducer = combineReducers({
  data: dataReducer,
  // Add other reducers here if you have any
});

// Create the Redux store with combined reducers and apply middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
