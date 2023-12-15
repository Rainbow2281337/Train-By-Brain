import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import positionsReducer from "./Positions/reducers";
import interviewReducer from "./Interviews/reducers";
import questionsReducer from "./Questions/reducers";
import questionReducer from "./Question/reducers";

const isDevelopmentMode = process.env.NODE_ENV === "development";

const store = configureStore({
  reducer: {
    positions: positionsReducer,
    interviews: interviewReducer,
    questions: questionsReducer,
    question: questionReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(isDevelopmentMode ? logger : []),
});

export default store;
