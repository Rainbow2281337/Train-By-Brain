import AddTopic from "./pages/AddTopic";
import Main from "./pages/Main";
import Topic from "./pages/Topic";
import Interview from "./pages/Interview";
import Topics from "./pages/Topics";
import {
  MAIN_ROUTE,
  TOPIC_ROUTE,
  ADD_ROUTE,
  INTERVIEW_ROUTE,
  POSITION_ROUTE,
} from "./utils/consts";

export const routes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: TOPIC_ROUTE + "/:id",
    Component: Topic,
  },
  {
    path: ADD_ROUTE,
    Component: AddTopic,
  },
  {
    path: INTERVIEW_ROUTE,
    Component: Interview,
  },
  {
    path: POSITION_ROUTE + "/:position",
    Component: Topics,
  },
];
