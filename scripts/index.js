import {selectContinent, confirmedBtn, deathsBtn, recoveredBtn, criticalBtn} from './constante/constante.js';
import {selectBoxContEvent, coronaInfoBtn} from './event-listeners.js'



// event listeners
selectContinent.addEventListener('change', selectBoxContEvent)
confirmedBtn.addEventListener('click', coronaInfoBtn)
deathsBtn.addEventListener('click', coronaInfoBtn)
recoveredBtn.addEventListener('click', coronaInfoBtn)
criticalBtn.addEventListener('click', coronaInfoBtn)






