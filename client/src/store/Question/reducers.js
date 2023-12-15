import { SET_QUESTION } from "./actions";

const initialState = {
  question: [],
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUESTION:
      return {
        ...state,
        question: action.payload,
      };
    default:
      return state;
  }
};

export default questionReducer;
