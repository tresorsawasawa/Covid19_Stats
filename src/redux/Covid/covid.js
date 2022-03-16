import {
  FETCH_SUCCESS,
  FILTER_BY_COUNTRY_NAME,
  FILTER_BY_PAGE_NUMBER,
  CLEAR_COUNTRIES_PER_PAGE,
  FETCH_FAIL,
} from './Actions';

export const filterCountriesByName = (payload) => ({
  type: FILTER_BY_COUNTRY_NAME,
  payload,
});

export const filterCountriesByPageNumber = (payload) => ({
  type: CLEAR_COUNTRIES_PER_PAGE,
  payload,
});

export const clearCountriesPerPage = (payload) => ({
  type: FILTER_BY_PAGE_NUMBER,
  payload,
});

const initialState = {
  casesByCountry: {},
  filteredCountries: [],
  countriesPerPage: [],
  totalCases: {},
};

const covidStatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        casesByCountry: action.payload.casesByCountry,
        totalCases: action.payload.totalCases,
      };

    case FILTER_BY_COUNTRY_NAME:
      return {
        ...state,
        filteredCountries: [
          ...Object.keys(action.payload.casesByCountry).filter(
            (country) => country.toLowerCase().startsWith.payload.countryName.toLowerCase(),
          ),
        ],
      };

    case FILTER_BY_PAGE_NUMBER: {
      const indexOfFirstElement = action.payload.pageNumber * action.payload.pageSize;

      return {
        ...state,
        countriesPerPage: [
          ...state.countriesPerPage,
          ...state.filteredCountries.slice(
            indexOfFirstElement,
            indexOfFirstElement + action.payload.pageSize,
          ),
        ],
      };
    }

    case CLEAR_COUNTRIES_PER_PAGE:
      return {
        ...state,
        countriesPerPage: action.payload,
      };

    case FETCH_FAIL:
      return initialState;

    default:
      return state;
  }
};

export default covidStatsReducer;
