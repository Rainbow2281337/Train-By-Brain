import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopicByPosition } from "../http/topicAPI";
import { setQuestions } from "../store/Questions/actions";
import { useParams } from "react-router-dom";
import QuestionsTable from "../components/QuestionsTable";

const Topics = () => {
  const position = useParams();
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);

  const columns = ["Question", "Tag"];

  useEffect(() => {
    fetchTopicByPosition(position.position).then((data) => {
      dispatch(setQuestions(data));
    });
  }, [dispatch, position.position]);

  return (
    <div className="w-[60%] mx-auto">
      <div>
        <QuestionsTable columnNames={columns} data={questions} />
      </div>
    </div>
  );
};

export default Topics;
