import axios from "axios";

const Api = axios.create({
  baseURL: "https://v3.football.api-sports.io/",
});

export default Api;
