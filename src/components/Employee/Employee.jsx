import * as React from 'react'

export const Employee = ({ employee }) => (
  <div>
    name: { employee.firstName } { employee.lastName },
    <span style={{color: 'green'}}>salary: { employee.salary }</span>
  </div>
)
