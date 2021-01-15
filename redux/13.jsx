const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types


const counterReducer = (state = 0, action) => {

  switch (action.type) {
    case INCREMENT:
    return  state+1;
    break;
    case DECREMENT:
    return  state-1;
    break;
    default:
    return state;
    break;
  }
};

const incAction = () => {
    return {
        type:INCREMENT
    }
};

const decAction = () => {
    return {
        type:DECREMENT
    }
};

const store = Redux.createStore(counterReducer);
