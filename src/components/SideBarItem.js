import React from 'react'
import styled from 'styled-components'
import { Arrow } from './SvgIcons'

const SideBarItem = () => {
  return (
    <Item>
      {' '}
      <p>
        <Arrow /> <span>Home</span>
      </p>
      <p>
        <Arrow /> <span>Message</span>
      </p>
      <h5>SHARE</h5>
      <p>
        <Arrow /> <span>Ranking</span>
      </p>
      <p>
        <Arrow /> <span>Challenge</span>
      </p>
      <p>
        <Arrow /> <span>Party</span>
      </p>
      <p>
        <Arrow /> <span>Contact</span>
      </p>
      <p>
        <Arrow /> <span>Parade</span>
      </p>
      <p>
        <Arrow /> <span>Group</span>
      </p>
    </Item>
  )
}

export default SideBarItem
const Item = styled.div`
  p {
    padding: 10px 0;
    span {
      margin-left: 12px;
      color: #767676;
    }
  }
`
