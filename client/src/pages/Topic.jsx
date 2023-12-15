import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopicById } from "../http/topicAPI";
import { useParams } from "react-router-dom";
import { setQuestion } from "../store/Question/actions";

const Topic = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const question = useSelector((state) => state.question);

  useEffect(() => {
    fetchTopicById(id).then((data) => {
      dispatch(setQuestion(data));
    });
  }, [dispatch]);

  return (
    <div className="w-[60%] mx-auto">
      <div>
        <h2 className="text-xl md:text-2xl lg:text-3xl">
          {question.question.question}
        </h2>
        <div className="mt-8 mb-2">
          <p className="text-lg text-gray-500">
            Author: {question.question.author}
          </p>
        </div>
        <div className="border-2 p-4 rounded-lg">
          <div>
            <p className="text-xl">{question.question.description}</p>
          </div>
          <div className="mt-6">
            <span className="text-lg text-gray-500">
              Date of Creation: {question.question.createdAt}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
