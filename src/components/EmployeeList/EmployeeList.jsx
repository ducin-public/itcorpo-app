import * as React from 'react'

import { Employee } from '../Employee/Employee'

export const EmployeeList = ({ employees }) => (
  <div>
    { employees.length ?
      employees.map(e => <Employee key={e.id} employee={e} />) :
      <i>no employees found</i>}
  </div>
)
