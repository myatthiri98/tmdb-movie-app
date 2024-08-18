import axios from 'axios';
import { API } from "../Configs/config";

export const getData = async () => {
  try {
    const response = await axios.get(API);
    console.log("response: " + JSON.stringify(response));
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};
