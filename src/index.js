const $ = (value) => {return document.querySelector(value)}



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


const renderRows = (element,name,inner) => {
  element.innerHTML += `
  <tr>
    <td class='name'>${name}</td>
    <td>${inner}</td>
  </tr>`
}


CHECKS(checkboxSW,inputSW)
CHECKS(checkboxUMA,inputUMA)



const info = $('.info')

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault()
  
  
  info.innerHTML = `<table>
          <thead>
            <tr>
              <th colspan="3"> Tabla de Valores</th>
            </tr>
          </thead>
          <tbody id="tbody">
            
          
          </tbody>
        </table>`

  const tbody = $('#tbody')
  let innerCode = ""

  renderRows(tbody,'Nombre',$('#name').value)
  renderRows(tbody,'Meses trabajados',months.value)
  renderRows(tbody,'Dias trabajados',days.value)
  renderRows(tbody,'Salario minimo',`${inputSW.value}$`)
  renderRows(tbody,'UMA',inputUMA.value)
  

  const bonusPerMonth = 15/12
  let bonusMonth = bonusPerMonth.toFixed(3) * months.value
  let bonusDay = (bonusPerMonth.toFixed(3)/30) * days.value

  let bonus = bonusMonth + bonusDay
  const bonusTotal = bonus * inputSW.value
  
  renderRows(tbody,'Aguinaldo',`${bonus} dias x ${inputSW.value}$ = ${bonusTotal.toFixed(3)}$`)
  
  const proporcion = 30/12
  
  let propMonth = proporcion * months.value
  let propDay = proporcion/30 * days.value
  
  const UMATotal = inputUMA.value * (propMonth+propDay)


  renderRows(tbody,'Cantidad exenta de inpuestos',`${(propMonth+propDay)} x ${inputUMA.value}$ = ${UMATotal}$`)

  const TOTAL = bonusTotal - UMATotal 
  renderRows(tbody,'Cantidad no exenta',`${bonusTotal}$ - ${UMATotal}$ = ${TOTAL.toFixed(3)}$`)

}) 