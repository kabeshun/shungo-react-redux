import axios from "axios";

const KEY = "AIzaSyCW586Xa88GmujT9UqZ89UXJHnnI9OTZ6w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
