import React from 'react'

import { PieChart } from '../PieChart/PieChart'
import { Dropdown } from '../../Dropdown/Dropdown'

import { salarySumBy } from '../../../utils/groupBy'

// items
// selectableItems
export class SelectableSalaryChart extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      chosenItem: props.selectableItems[0].key
    }
  }

  itemChangeHandler = (e) => {
    const chosenItem = e.target.value
    this.setState({ chosenItem })
  }

  render(){
    return (<React.Fragment>
      <Dropdown
        items={this.props.selectableItems}
        itemChangeHandler={this.itemChangeHandler} />
      <PieChart
        label={`Grouped by ${this.state.chosenItem}`}
        data={ salarySumBy(this.props.items, i => i[this.state.chosenItem]) } />
    </React.Fragment>)
  }
}
