import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../components/Table";
import {
  fetchAllInterviews,
  fetchInterviewsByGrade,
  fetchInterviewsByPosition,
} from "../http/interviewAPI";
import { setInterviews } from "../store/Interviews/actions";

const Interview = () => {
  const [position, setPosition] = useState("");
  const [grade, setGrade] = useState("");

  const positions = useSelector((state) => state.positions);
  const dispatch = useDispatch();
  const interviews = useSelector((state) => state.interviews);

  const columns = ["Title", "Position", "Grade"];

  useEffect(() => {
    fetchAllInterviews().then((data) => {
      dispatch(setInterviews(data));
    });
  }, [dispatch]);

  // handling form
  const handleForm = async (e) => {
    e.preventDefault();

    if (position) {
      await fetchInterviewsByPosition(position).then((data) => {
        dispatch(setInterviews(data));
      });
    } else if (grade) {
      await fetchInterviewsByGrade(grade).then((data) => {
        dispatch(setInterviews(data));
      });
    }
  };

  // handling clear button
  const handleClear = () => {
    setPosition("");
    setGrade("");

    fetchAllInterviews().then((data) => {
      dispatch(setInterviews(data));
    });
  };
  return (
    <div className="w-[60%] mx-auto">
      <form onSubmit={handleForm}>
        <div className="flex flex-col items-center lg:flex-row justify-between">
          <div className="flex flex-col items-center gap-2">
            <label htmlFor="position_select" className="text-lg">
              Position
            </label>
            <select
              id="position_select"
              name="position_select"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="border-2 rounded-lg py-1 px-2 focus:outline-blue-600"
            >
              <option value="DEFAULT" hidden>
                -------
              </option>
              {positions.positions.map((position, index) => (
                <option key={index} value={position.position}>
                  {position.position === undefined ? "" : position.position}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col items-center gap-4 my-4">
            <div className="flex flex-row items-center gap-2 lg:gap-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="button"
                  id="junior"
                  value="junior"
                  onChange={(e) => setGrade(e.target.value)}
                />
                <label htmlFor="junior" className="ml-2 text-lg md:text-xl">
                  Junior
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="button"
                  id="middle"
                  value="middle"
                  onChange={(e) => setGrade(e.target.value)}
                />
                <label htmlFor="middle" className="ml-2 text-lg md:text-xl">
                  Middle
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="button"
                  id="senior"
                  value="senior"
                  onChange={(e) => setGrade(e.target.value)}
                />
                <label htmlFor="senior" className="ml-2 text-lg md:text-xl">
                  Senior
                </label>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="py-1 px-4 rounded-lg bg-blue-600 text-white text-lg md:text-xl hover:bg-blue-600/80 duration-200"
              >
                Submit
              </button>
              <button
                className="py-1 px-4 rounded-lg bg-blue-600 text-white text-lg md:text-xl hover:bg-blue-600/80 duration-200"
                onClick={handleClear}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </form>
      <div>
        <Table columnNames={columns} data={interviews} />
      </div>
    </div>
  );
};

export default Interview;
