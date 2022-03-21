import { applyMiddleware, createStore, PreloadedState, Reducer } from "redux";
import thunk from "redux-thunk";

const middlewares = [thunk];

export type State<T extends Reducer> = Partial<ReturnType<T>>;

const { createLogger } = require("redux-logger");
const logger = createLogger({
  collapsed: true
});
middlewares.push(logger);
export const configureStore = <T extends Reducer>(
  rootReducer: T,
  preloadedState: PreloadedState<State<T>>
) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
};