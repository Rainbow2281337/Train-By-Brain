import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPositions } from "../http/topicAPI";
import { setPositions } from "../store/Positions/actions";
import { useNavigate } from "react-router-dom";
import { POSITION_ROUTE } from "../utils/consts";

const Main = () => {
  const dispatch = useDispatch();
  const positions = useSelector((state) => state.positions);
  const navigate = useNavigate();

  // fetch all positiions and remove duplicates
  useEffect(() => {
    fetchAllPositions().then((data) => {
      const uniquePositions = Array.from(
        new Set(data.map((item) => item.position))
      );
      dispatch(setPositions(uniquePositions.map((position) => ({ position }))));
    });
  }, [dispatch]);

  // navigate to positiion page
  const handlePositionClick = (position) => {
    navigate(`${POSITION_ROUTE}/${position}`);
  };

  return (
    <div className="w-[60%] mx-auto mt-14">
      <h1 className="text-2xl md:text-3xl font-bold">Positions</h1>
      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {positions.positions.map((position, index) => (
          <li
            key={index}
            onClick={() => handlePositionClick(position.position)}
            className="border-2 rounded-xl border-gray-400 py-2 px-4 cursor-pointer text-xl text-blue-600 font-semibold hover:underline"
          >
            {position.position === undefined ? "" : position.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
