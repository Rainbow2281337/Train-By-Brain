import { $host } from "./index";

export const createInterview = async (interview) => {
  const { data } = await $host.post(
    "http://localhost:5000/api/interview",
    interview
  );

  return data;
};

export const fetchAllInterviews = async () => {
  const { data } = await $host.get(
    "http://localhost:5000/api/interview/interviews"
  );

  return data;
};

export const fetchInterviewsByGrade = async (grade) => {
  const { data } = await $host.get(
    "http://localhost:5000/api/interview/interviews/grade?grade=" + grade
  );

  return data;
};

export const fetchInterviewsByPosition = async (position) => {
  const { data } = await $host.get(
    "http://localhost:5000/api/interview/interviews/position?position=" +
      position
  );

  return data;
};

export const deleteInterview = async (id) => {
  const { data } = await $host.delete(
    "http://localhost:5000/api/interview" + id
  );

  return data;
};
