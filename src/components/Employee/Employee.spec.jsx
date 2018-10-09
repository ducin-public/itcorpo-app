import React from 'react'
import renderer from 'react-test-renderer';

import { Employee } from './Employee'
import EmployeesMock from '../../services/employees-mock.json'

it('renders correctly', () => {
  const tree = renderer
    .create(<Employee employee={EmployeesMock[0]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
