import { states, getContinent, getCoronaCountries, getCoronaEachCountry} from "./get-data-api.js"

export function selectBoxContEvent(event) {
  let continent = event.target.value;
  states.continent = continent;
  getContinent();
  
}

export function coronaInfoBtn(event) {
  let typeData = event.target.getAttribute('id');
  states.data = typeData;
  getCoronaCountries();
}

export function selectBoxCountryEvent(event) {
  let country = event.target.value
  states.country = country;
  getCoronaEachCountry()
}
