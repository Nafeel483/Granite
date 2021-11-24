import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const friendOptions = [
  {
    key: 'Default',
    text: 'Default',
    value: 'Default',
  },
  {
    key: 'Sort by popularity',
    text: 'Sort by popularity',
    value: 'Sort by popularity',
  },
  {
    key: 'Sort by average rating',
    text: 'Sort by average rating',
    value: 'Sort by average rating',
  },
  {
    key: 'Sort by latest',
    text: 'Sort by latest',
    value: 'Sort by latest',
  },
  {
    key: 'Sort by price: low to high',
    text: 'Sort by price: low to high',
    value: 'Sort by price: low to high',
  },
  {
    key: 'Sort by Price: high to low',
    text: 'Sort by Price: high to low',
    value: 'Sort by Price: high to low',
  },
]

const SortProduct = () => (
  <span>
    <Dropdown
      inline
      options={friendOptions}
      defaultValue={friendOptions[0].value}
    />
  </span>
)

export default SortProduct