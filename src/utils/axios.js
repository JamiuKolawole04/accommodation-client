import axios from "axios";

const instance = axios.create({
  baseURL: "https://booking-api.cyclic.app/api/v1", // THE API (backend) URL
  // baseURL: "http://localhost:8080/api/v1" // THE API (backend) URL
});

export default instance;
