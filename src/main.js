const $ = (value) => document.querySelector(value)



const months = $('#meses')
const days = $('#dias')
const inputSW = $('#inputSW')
const inputUMA = $('#inputUMA')



const checkboxSW = $('.checkboxSW')
const checkboxUMA = $('.checkboxUMA')


const CHECKS = (check,input) => {
  check.addEventListener('change', () => {
    if (check.checked) {
      input.disabled = false
    } else {
      input.disabled = true
    }
  })
}



CHECKS(checkboxSW,inputSW)
CHECKS(checkboxUMA,inputUMA)



const info = $('.info')

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault()

  const bonusPerMonth = 15/12
  let bonusMonth = bonusPerMonth * months.value
  let bonusDay = (bonusPerMonth/30) * days.value

  let bonus = bonusMonth + bonusDay

  
  const bonusTotal = bonus * inputSW.value

  info.innerHTML += `<div class='infoContainer'>${bonus} dias x ${inputSW.value}$ = ${bonusTotal}$</div>`
  
  const proporcion = 30/12
  
  let propMonth = proporcion * months.value
  let propDay = proporcion/30 * days.value
  
  const UMATotal = inputUMA.value * (propMonth+propDay)
  
  info.innerHTML += `<div class='infoContainer'>${(propMonth+propDay)} x ${inputUMA.value}$ = ${UMATotal}$</div>`
  
  
  const TOTAL = bonusTotal - UMATotal 
  
  info.innerHTML += `<div class='infoContainer'>${bonusTotal}$ - ${UMATotal}$ = ${TOTAL}$</div>`

}) 