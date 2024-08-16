import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const user = JSON.parse(localStorage.getItem('user'))?.auth
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.token;

console.log(TOKEN)

export const publicRequest = axios.create({
  baseURL: baseURL,
  headers: { 'Content-Type': 'application/json' },
});

export const userRequest = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});