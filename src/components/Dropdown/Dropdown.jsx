import React from 'react'

export const Dropdown = ({ items, itemChangeHandler }) => (
  <select onChange={itemChangeHandler}>
    <option value=''>- choose -</option>
    {items.map(({key, label}) =>
      <option key={key} value={key}>{label}</option>)}
  </select>
)
