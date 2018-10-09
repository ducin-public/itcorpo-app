import React from 'react'

import { EmployeeService } from '../../services/EmployeeService'
import { EmployeeList } from '../EmployeeList/EmployeeList'
import { Loading } from '../Loading/Loading'
import { PieChart } from '../Charts/PieChart/PieChart'
import { SelectableChart } from '../Charts/SelectableChart/SelectableChart'

import { countBy, salarySumBy } from '../../utils/groupBy'

export class EmployeeContainer extends React.Component {
  state = {
    employees: [],
    loading: true
  }
  
  constructor(props){
    super(props)
    EmployeeService.getEmployees()
    .then(employees => {
      this.setState({ employees, loading: false })
    })
  }
  
  render(){
    return this.state.loading ?
    <Loading /> :
    <React.Fragment>
      <PieChart
        label="Employees by nationalities"
        data={ countBy(this.state.employees, e => e.nationality) } />
      <PieChart
        label="Total salary by department"
        data={ salarySumBy(this.state.employees, e => e.departmentId) } />
      <SelectableChart employees={this.state.employees} />
      <EmployeeList employees={this.state.employees} />
    </React.Fragment>
  }
}
