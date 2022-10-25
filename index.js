const covnertBtn = document.getElementById('convertBtn');

const lengthEl = document.getElementById('lengthR');
const volumeEl = document.getElementById('volumeR');
const massEl = document.getElementById('massR');

const noInputEl = document.getElementById('noInput');

function renderConvert () {
    const valueTBC = Number(noInputEl.value);

    if(valueTBC === 69 || valueTBC ===420) {
        lengthEl.innerHTML = `<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"> You are a champ!</a>`
        volumeEl.innerHTML = `<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"> You are a champ!</a>`
        massEl.innerHTML = `<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"> You are a champ!</a>`
        return;
    }
    if(typeof valueTBC != 'number') {
        lengthEl.textContent = 'Please provide a number...';
        massEl.textContent = 'Please provide a number...';
        volumeEl.textContent = 'Please provide a number...';
        return;
    }

    lengthEl.textContent = 
    `${valueTBC} meters = 
    ${(valueTBC * 3.28084).toFixed(3)} feet  |  ${valueTBC} feet = 
    ${(valueTBC / 3.28084).toFixed(3)} meters`;

    volumeEl.textContent = 
    `${valueTBC} liters = 
    ${(valueTBC * 0.26417).toFixed(3)} gallons  |  ${valueTBC} galons = 
    ${(valueTBC / 0.26417).toFixed(3)} liters`;

    massEl.textContent = 
    `${valueTBC} kilos = 
    ${(valueTBC * 2.20462).toFixed(3)} pounds  |  ${valueTBC} pounds = 
    ${(valueTBC / 2.20462).toFixed(3)} kilos`;
    noInputEl.value = '';
}

covnertBtn.addEventListener('click', renderConvert)