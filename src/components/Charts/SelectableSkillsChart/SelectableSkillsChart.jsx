import React from 'react'

import { PieChart } from '../PieChart/PieChart'
import { Dropdown } from '../../Dropdown/Dropdown'

import { countBy } from '../../../utils/groupBy'
import { hasSkillLabel, uniqueSkills } from '../../../employees'

export class SelectableSkillsChart extends React.Component {
  state = {
    chosenItem: 'JavaScript'
  }

  getSkillsOptions = () => {
    return uniqueSkills(this.props.employees)
      .sort()
      .map(skill => ({ key: skill, label: skill }))
  }

  itemChangeHandler = (e) => {
    const chosenItem = e.target.value
    this.setState({ chosenItem })
  }

  render(){
    return (<React.Fragment>
      <Dropdown
        items={this.getSkillsOptions()}
        itemChangeHandler={this.itemChangeHandler} />
      <PieChart
        label={`Knows ${this.state.chosenItem}`}
        data={ countBy(this.props.employees, hasSkillLabel(this.state.chosenItem)) } />
    </React.Fragment>)
  }
}
