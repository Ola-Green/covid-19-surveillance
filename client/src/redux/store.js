import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);

export const DataProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
