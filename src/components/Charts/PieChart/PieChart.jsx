import React from 'react'
import * as c3 from 'c3'
import 'c3/c3.css'

import { Header } from '../../Header/Header'

const hash = () => 'chart-' + (Math.random() + '').substr(2, 40)

export class PieChart extends React.Component {
  id = hash()

  componentDidMount(){
    this.chart = c3.generate({
      bindto: '#' + this.id,
      data: {
        columns: Object.entries(this.props.data),
        type : 'pie'
      }
    });
  }

  componentWillUpdate(nextProps){
    this.chart.load({
      unload: true,
      columns: Object.entries(nextProps.data)
    });
  }

  // componentDidUpdate(prevProps){
  //   this.chart.load({
  //     unload: true,
  //     columns: Object.entries(this.props.data)
  //   });
  // }

  componentWillUnmount(){
    this.chart.destroy()
  }

  render(){
    return (
      <React.Fragment>
        <Header>{this.props.label}</Header>
        <div id={this.id}></div>
      </React.Fragment>
    )
  }
}
