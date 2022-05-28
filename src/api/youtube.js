import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyDJVm0Q1ScX3IRNgm8BPcYT3EgaHWDmhyY",
  },
});
