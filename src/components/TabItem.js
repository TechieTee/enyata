import React from 'react'
import styled from 'styled-components'
import { Arrow } from './SvgIcons'

const TabItem = ({ type }) => {
  return (
    <Tabitem>
      <span>{type}</span>{' '}
      <span>
        <Arrow />
      </span>
    </Tabitem>
  )
}

export default TabItem
const Tabitem = styled.span`
  background: #fff;
  padding: 8px 30px;
  cursor: arrow;
  margin: -2px;
  box-shadow: 0px 1px 5px rgb(25 59 104 / 15%);
  border-radius: 2px;
`
