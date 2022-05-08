import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://mentor-comments-section.herokuapp.com",
});
