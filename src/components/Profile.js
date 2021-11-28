import React from 'react'
import styled from 'styled-components'
import { Arrow, UserIcon } from './SvgIcons'

const Profile = () => {
  return (
    <ProfileWrapper>
      <UserIcon />
      <span style={{ margin: '14px 8px' }}>
        Abigeal <Arrow />
      </span>
    </ProfileWrapper>
  )
}

export default Profile
const ProfileWrapper = styled.span`
  display: flex;
  cursor: arrow;
`
