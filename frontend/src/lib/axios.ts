import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
      ? "https://fullstack-music-app.fly.dev//api"
      : "/api",
});
