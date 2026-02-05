const { legacy_createStore, applyMiddleware } = require("redux");
const { createLogger } = require("redux-logger");

const initialCounterState = {
  counter: 0,
};

const actionTypes = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
};
const increaseAction = (data = 1) => {
  return {
    type: actionTypes.INCREASE,
    payload: data,
  };
};

const decreaseAction = (data = 1) => {
  return {
    type: actionTypes.DECREASE,
    payload: data,
  };
};

const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE:
      return {
        ...state,
        //counter: state.counter + 1,
        counter: state.counter + action.payload,
      };

    case actionTypes.DECREASE:
      return {
        ...state,
        // counter: state.counter - 1,
        counter: state.counter - action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

const loggerMiddleware = createLogger();
const store = legacy_createStore(
  counterReducer,
  applyMiddleware(loggerMiddleware),
);
//console.log(store.getState());

//store.dispatch({ type: actionTypes.INCREASE, payload: 2 });
store.dispatch(increaseAction(2));
//console.log(store.getState());

//store.dispatch({ type: actionTypes.INCREASE, payload: 1 });
store.dispatch(increaseAction(4));
//console.log(store.getState());

//store.dispatch({ type: actionTypes.DECREASE, payload: 3 });
store.dispatch(decreaseAction(2));
//console.log(store.getState());
