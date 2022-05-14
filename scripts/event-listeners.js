import { states, getContinent, getCoronaCountries, getCoronaEachCountry} from "./get-data-api.js"

export function selectBoxContEvent(event) {
  let continent = event.target.value;
  states.continent = continent;
  getContinent();
  
}

export function coronaInfoBtn(event) {
  let idBtn = event.target.getAttribute('id');
  states.data = idBtn;
  getCoronaCountries();
}

export function selectBoxCountryEvent(event) {
  let country = event.target.value
  getCoronaEachCountry(country)
}
