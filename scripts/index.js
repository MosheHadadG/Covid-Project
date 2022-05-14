import {selectContinent, confirmedBtn, deathsBtn, recoveredBtn, criticalBtn, selectBoxCountry} from './constante/constante.js';
import {selectBoxContEvent, coronaInfoBtn, selectBoxCountryEvent} from './event-listeners.js'



// event listeners
selectContinent.addEventListener('change', selectBoxContEvent)
selectBoxCountry.addEventListener('change', selectBoxCountryEvent)
confirmedBtn.addEventListener('click', coronaInfoBtn)
deathsBtn.addEventListener('click', coronaInfoBtn)
recoveredBtn.addEventListener('click', coronaInfoBtn)
criticalBtn.addEventListener('click', coronaInfoBtn)






