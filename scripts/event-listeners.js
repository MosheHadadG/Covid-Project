import { dataType, getContinent} from "./get-data-api.js"

export function selectBoxContEvent(event) {
  let continent = event.target.value;
  dataType.continent = continent;
  getContinent();
  
}

export function coronaInfoBtn(event) {
  let idBtn = event.target.getAttribute('id');
  dataType.data = idBtn;
  getContinent();
}

