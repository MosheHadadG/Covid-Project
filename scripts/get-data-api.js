import { addLabel, myChart, removeData, addData, removeLabels, data } from "./chart.js";
import { selectBoxCountry } from "./constante/constante.js";

let continentArray;
export const states = {
  data: '',
  continent: ''
}


export async function getContinent() {
  removeLabels(myChart);
  removeData(myChart);
  continentArray = [];
  try {
    const responseContinent = await
    fetch(`https://nameless-citadel-58066.herokuapp.com/https://restcountries.herokuapp.com/api/v1/region/${states.continent}`);
    const continents = await responseContinent.json();
    selectBoxCountry.innerHTML = "";
    continents.forEach((country) => {
      const countryCode = country.cca2;
      const countryName = country.name.common;
      let countriesObj = { code: countryCode, name: countryName };
      continentArray.push(countriesObj);
      let newOption = document.createElement('option');
      newOption.setAttribute('value', countryName);
      newOption.innerText = countryName;
      selectBoxCountry.appendChild(newOption);
      addLabel(myChart, countriesObj.name)
    });

  } catch(err) {
    console.log(err)
  }
}


export async function getCoronaCountries() {
  
  removeData(myChart);
  try {
    const responeCountries = await fetch(`https://corona-api.com/countries`);
    const countries = await responeCountries.json();
    countries.data.forEach((country) => {
      continentArray.forEach((countryContinent) => {
        if (country.code === countryContinent.code) {
          addData(myChart, country.latest_data[states.data]);
        }
      })
    })
  } catch (err) {
    console.log(err);
  }
};

function getCoronaCode(countryName) {
  const findCountry = continentArray.find((country) => {
    return country.name === countryName;
  });
  return findCountry.code;
}

export async function getCoronaEachCountry(countryName) {
  removeLabels(myChart);
  removeData(myChart);
  let countryCode = getCoronaCode(countryName)

  try {
    const responseCorona = await fetch(`https://corona-api.com/countries/${countryCode}`);
    const countryCorona = await responseCorona.json();
    const totalCases = countryCorona.data.latest_data.confirmed;
    const totalDeaths = countryCorona.data.latest_data.deaths;
    const totalRecovered = countryCorona.data.latest_data.recovered
    const newCases = countryCorona.data.today.confirmed;
    const newDeaths = countryCorona.data.today.deaths;
    const critical = countryCorona.data.latest_data.critical;
    myChart.data.labels.push('Total Cases', 'Total Deaths', 'Total Recovered', 'New Cases', 'New Deaths', 'Critical');
    myChart.data.datasets[0].data.push(totalCases, totalDeaths, totalRecovered, newCases, newDeaths, critical);
    myChart.update();

  } catch (err) {
    console.log(err);
  }
}

