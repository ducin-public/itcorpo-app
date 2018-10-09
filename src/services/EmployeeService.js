import { baseURL } from './config'

export const EmployeeService = {
  getEmployees(){ // Promise<Employee[]>
    return fetch(`${baseURL}employees`)
      .then(res => res.json())
  }
}
