import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c9966393df3a446d92f3ee4dbef8d4ad",
  },
});
