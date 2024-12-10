import axios from "axios";

export const usersInstance = axios.create({
  baseURL: "https://14a2c2efb29617b5.mokky.dev",
  headers: {
    "Content-Type": "application/json",
  },
});
