import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID VzcxpX0orYbEF-NGXx5kZEExvo7eLd2RQ6SVQIbSpvg",
  },
});
