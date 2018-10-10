import React from 'react'

import { EmployeeService } from '../../services/EmployeeService'
import { EmployeeList } from '../EmployeeList/EmployeeList'
import { Loading } from '../Loading/Loading'
import { PieChart } from '../Charts/PieChart/PieChart'
import { SelectableSkillsChart } from '../Charts/SelectableSkillsChart/SelectableSkillsChart'
import { SelectableSalaryChart } from '../Charts/SelectableSalaryChart/SelectableSalaryChart'

import { countBy, salarySumBy } from '../../utils/groupBy'
import { selectableFields } from '../../employees'

export class EmployeeContainer extends React.Component {
  state = {
    employees: [],
    loading: true
  }
  
  constructor(props){
    super(props)
    EmployeeService.getCollection((newEmployees) => {
      this.setState({ employees: newEmployees, loading: false })
    }).then(employees => {
      this.setState({ employees })
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
      <SelectableSalaryChart
        items={this.state.employees}
        selectableItems={selectableFields} />
      <SelectableSkillsChart employees={this.state.employees} />
      <EmployeeList employees={this.state.employees} />
    </React.Fragment>
  }
}
