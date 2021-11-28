import React, { useState } from 'react'
import styled from 'styled-components'
import Profile from '../components/Profile'
import GlobalSearch from '../components/GlobalSearch'
import NotificationDropDown from '../components/Notification/DropDown'
import { Arrow, NotificationIcon } from '../components/SvgIcons'

const NavBarItems = () => {
  const [notification, setNotification] = useState(false)
  return (
    <NavBaritems>
      <GlobalSearch />
      <Notification>
        <Icon onClick={() => setNotification(!notification)}>
          <NotificationIcon />
        </Icon>
        {notification ? (
          <NotificationDropDown
            match='Micheal like you'
            matchnum='about 20 min ago'
            time={<Arrow />}
          />
        ) : (
          ''
        )}
      </Notification>

      <Profile />
    </NavBaritems>
  )
}

export default NavBarItems
const NavBaritems = styled.div`
  display: grid;
  grid-template-columns: 75% 10% 15%;
`
const Notification = styled.div`
  text-align: center;
  z-index: 1;
  cursor: pointer;
`
const Icon = styled.div`
  text-align: center;
  margin-top: 8px;
`
