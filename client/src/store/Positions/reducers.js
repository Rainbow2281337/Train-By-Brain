import { SET_POSITIONS } from "./actions";

const initialState = {
  positions: [],
};

const positionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSITIONS:
      return {
        ...state,
        positions: action.payload,
      };
    default:
      return state;
  }
};

export default positionsReducer;
