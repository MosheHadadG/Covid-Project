import { addLabel, myChart, removeData, addData, removeLabels } from "./chart.js";

export const dataType = {
  data: '',
  continent: ''
}

const states = []

export async function getContinent() {
  removeLabels(myChart);
  console.log(dataType.continent)
  const responseContinent = await fetch(`https://nameless-citadel-58066.herokuapp.com/https://restcountries.herokuapp.com/api/v1/region/${dataType.continent}`);
  const continents = await responseContinent.json();

  continents.forEach((country) => {
    const countryName = country.name.common;
    const countryCode = country.cca2;
    const countries = { name: countryName, code: countryCode }
    states.push(countries);
    getCoronaEachCountry(countryCode)
  });
}

export async function getCoronaEachCountry(countryCode) {
  removeData(myChart)
  try {
    const responseCorona = await fetch(`https://corona-api.com/countries/${countryCode}`);
    if (!responseCorona.ok) {
      throw new Error('not found')
    }
    else {
      const countryCorona = await responseCorona.json();
      const lastData = countryCorona.data.latest_data;
      const todayData = countryCorona.data.today;
      const countryName = countryCorona.data.name;
      console.log(countryCorona.data)
      addLabel(myChart, countryName)
      addData(myChart, lastData[dataType.data]);
    }
  } catch (error) {
    console.log(error);
  }
}

