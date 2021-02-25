import * as redux from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import cocktailCounterReducer from "./cocktailcounter";
import cocktailSearchReducer from "./cocktailsearch";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = redux.combineReducers({
  cocktailCounterState: cocktailCounterReducer,
  cocktailSearchState: cocktailSearchReducer,
});

const store = redux.createStore(
  rootReducer,
  composeWithDevTools(redux.applyMiddleware(logger, thunk))
);

export default store;
