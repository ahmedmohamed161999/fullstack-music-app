import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
      ? "https://music-app-gamma-fawn.vercel.app/api"
      : "/api",
});
