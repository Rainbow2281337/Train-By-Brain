import { $host } from "./index.js";

export const createTopic = async (topic) => {
  const { data } = await $host.post("http://localhost:5000/api/topic", topic);

  return data;
};

export const fetchAllTopics = async () => {
  const { data } = await $host.get("http://localhost:5000/api/topic/topics");

  return data;
};

export const fetchAllPositions = async () => {
  const { data } = await $host.get("http://localhost:5000/api/topic/positions");

  return data;
};

export const fetchTopicByPosition = async (position) => {
  const { data } = await $host.get(
    "http://localhost:5000/api/topic/topics/position?position=" + position
  );

  return data;
};

export const fetchTopicById = async (id) => {
  const { data } = await $host.get(
    "http://localhost:5000/api/topic/topics/" + id
  );

  return data;
};

export const deleteTopic = async (id) => {
  const { data } = await $host.delete(
    "http://localhost:5000/api/topic/topics" + id
  );

  return data;
};
