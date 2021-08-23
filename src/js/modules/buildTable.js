export class BuildTable {
  cols
  headers
  data
  constructor(headers, data) {
    this.cols = headers.length
    this.headers = headers
    this.data = data
  }

  build() {
    let table = document.createElement('table')
    let row = document.createElement('tr')
    this.headers.forEach(headerItem => {
      let th = document.createElement('th')
      th.innerHTML = headerItem
      row.append(th)
    });
    table.appendChild(row)

    this.data.forEach(el => {
      let row = document.createElement('tr')
      let tdType = document.createElement('td')
      tdType.innerText = el.type
      let tdValue = document.createElement('td')
      tdValue.innerText = el.value
      row.appendChild(tdType)
      row.appendChild(tdValue)
      table.appendChild(row)
    })

    return table
  }
}