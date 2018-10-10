import { baseURL } from './config'

export const EmployeeService = {
  getEmployees(){ // Promise<Employee[]>
    return fetch(`${baseURL}employees`)
      .then(res => res.json())
  },
  async getCollection(){ // -> Promise<Employee[]>
    const URL = `${baseURL}employees`;
    const initialRes = await fetch(URL)
    const count = initialRes.headers.get('X-Total-Count')
    const employees = await initialRes.json();
  
    const pagesPromises = [];
    const pages = Math.ceil(count / 50)
    for( let idx = 2; idx < pages; idx++ ){
      pagesPromises.push(fetch(`${URL}?_page=${idx}`))
    }
    for( let idx = 0; idx < pagesPromises.length; idx++ ){
      const res = await pagesPromises[idx]
      employees.push( ...(await res.json()) )
    }
    return employees;
  }
  
  
}

// crappy request with count:

/*
const getCrappyData = () => fetch('http://localhost:3030/employees')
  .then(res => Promise.all([
    Promise.resolve(res.headers.get('X-Total-Count')),
    res.json()
  ]))
  .then(([count, data]) => ({ data, count,
   completeness: data.length / count
  }))
  .then(console.log)

const getLessCrappyData = async () => {
  const res = await fetch('http://localhost:3030/employees')
  return {
    data: await res.json(),
    count: res.headers.get('X-Total-Count')
  }
}
*/
