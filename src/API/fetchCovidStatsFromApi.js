import axios from 'axios';
import BASE_URL_API from './API';
import { FETCH_SUCCESS, FETCH_FAIL } from '../redux/Cases/Actions';

const fetchCovidStatsFromApi = (name) => async (dispatch) => {
  let result;

  try {
    const { data } = await axios.get(`${BASE_URL_API}/${name}.date`);
    result = data;
    const casesByCountry = data.dates[name.date].countries;
    const totalCases = data.total;

    dispatch({
      type: FETCH_SUCCESS,
      payload: {
        casesByCountry,
        totalCases,
      },
    });
  } catch (error) {
    result = error;
    dispatch({
      type: FETCH_FAIL,
      payload: error,
    });
  }
  return result;
};

export default fetchCovidStatsFromApi;
