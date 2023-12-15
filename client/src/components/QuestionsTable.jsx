import React from "react";
import { useNavigate } from "react-router-dom";
import { TOPIC_ROUTE } from "../utils/consts";

const QuestionsTable = ({ columnNames, data }) => {
  const navigate = useNavigate();

  return (
    <div className="md:overflow-hidden overflow-x-auto">
      <table className="table-auto min-w-full">
        <thead>
          <tr className="border-b border-slate-800 text-left">
            {columnNames.map((name, index) => (
              <th
                key={index}
                className="text-lg md:text-xl lg:text-2xl px-4 py-2 sm:px-6 sm:py-3"
              >
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.questions.map((question, index) => (
            <tr key={index} className="border-b border-slate-400">
              <td className="w-[80%] px-4 py-2 sm:px-6 sm:py-3">
                <span
                  onClick={() =>
                    question._id && navigate(TOPIC_ROUTE + "/" + question._id)
                  }
                  className="text-md md:text-lg text-blue-600 font-semibold hover:underline cursor-pointer"
                >
                  {question.question}
                </span>
              </td>
              <td className="text-md md:text-lg w-[20%] px-4 py-2 sm:px-6 sm:py-3">
                {question.tag}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsTable;
