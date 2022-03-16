import getCountryTwoLetterCode from './countriesAbrev';

const MAP_BASE_URL = 'https://raw.githubusercontent.com/tresorsawasawa/mapsicon/master/all';

const getCountryMapUrl = (countryName, mapSize) => {
  const countryAbrevCode = getCountryTwoLetterCode(countryName);

  if (countryAbrevCode === undefined) {
    return 'https://raw.githubusercontent.com/tresorsawasawa/mapsicon/master/all/af/128.png';
  }

  return `${MAP_BASE_URL}/${countryAbrevCode}/${mapSize}.png`;
};

export default getCountryMapUrl;
