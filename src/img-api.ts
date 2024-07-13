// img-api.ts

import axios from "axios";
import { ImageCardData } from "./types";

axios.defaults.baseURL = "https://api.unsplash.com/";
const KEY: string = "j5bai0Y9_YKdbomWmcoepa0kkVl5Y8BVRmwVG5xoUh0";

interface Response {
  results: ImageCardData[];
  totalPages: number;
}

const fetchImages = async (
  searchWord: string,
  page: string
): Promise<Response> => {
  const response = await axios.get("search/photos", {
    params: {
      query: searchWord,
      per_page: 12,
      page,
    },
    headers: {
      Authorization: `Client-ID ${KEY}`,
    },
  });
  return {
    results: response.data.results,
    totalPages: response.data.total_pages,
  };
};

export default fetchImages;
