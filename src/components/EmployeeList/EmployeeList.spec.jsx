import React from 'react'
import renderer from 'react-test-renderer';

import { EmployeeList } from './EmployeeList'
import EmployeesMock from '../../services/employees-mock.json'

it('renders correctly', () => {
  const tree = renderer
    .create(<EmployeeList employees={EmployeesMock} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
