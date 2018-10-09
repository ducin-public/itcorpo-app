import React from 'react'

export const Dropdown = ({ items, itemChangeHandler }) => (
  <select onChange={itemChangeHandler}>
    {items.map(({key, label}) =>
      <option key={key} value={key}>{label}</option>)}
  </select>
)
