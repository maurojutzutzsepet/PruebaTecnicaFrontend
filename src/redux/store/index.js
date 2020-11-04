import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import FiscaliaReducers from "../../main/components/store/reducers";
const reducers = combineReducers({
  FiscaliaReducers,
});

export default () => {
  return {
    ...createStore(reducers, applyMiddleware(ReduxThunk)),
  };
};
