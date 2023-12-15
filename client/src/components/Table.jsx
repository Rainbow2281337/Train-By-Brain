import React from "react";

const Table = ({ columnNames, data }) => {
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
          {data.interviews.map((interview) => (
            <tr key={interview._id} className="border-b border-slate-400">
              <td className="w-[80%] px-4 py-2 sm:px-6 sm:py-3">
                <a
                  href={interview.reference}
                  target="_blank"
                  className="text-md md:text-lg text-blue-600 font-semibold hover:underline"
                >
                  {interview.title}
                </a>
              </td>
              <td className="text-md md:text-lg w-[20%] px-4 py-2 sm:px-6 sm:py-3">
                {interview.position}
              </td>
              <td className="text-md md:text-lg px-4 py-2 sm:px-6 sm:py-3">
                {interview.grade}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
