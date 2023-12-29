import axios from "axios";

export const google = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api',
  timeout: 10000
});