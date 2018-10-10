import { baseURL } from './config'

export const EmployeeService = {
  getEmployees(){ // Promise<Employee[]>
    return fetch(`${baseURL}employees`)
      .then(res => res.json())
  }
}

// crappy request with count:

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
