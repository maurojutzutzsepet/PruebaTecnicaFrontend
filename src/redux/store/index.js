import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import FiscaliaReducers from "../../main/components/store/reducers";
const reducers = combineReducers({
  FiscaliaReducers,
});

const store = () => {
  return {
    ...createStore(reducers, applyMiddleware(ReduxThunk)),
  };
};
export default store;
