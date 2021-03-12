import axios from 'axios';
import {covidKey} from "../config/config";

const END_POINT = 'https://api.odcloud.kr/api/15077586/v1';

export const getCovidvaccine = async () => {
  const responseData = await axios.get(`${END_POINT}/centers?serviceKey=${covidKey}`);
  return responseData.data;
}
