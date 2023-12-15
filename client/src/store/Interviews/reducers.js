import { SET_INTERVIEWS } from "./actions";

const initialState = {
  interviews: [],
};

const interviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INTERVIEWS:
      return {
        ...state,
        interviews: action.payload,
      };
    default:
      return state;
  }
};

export default interviewReducer;
