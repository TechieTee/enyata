import React from 'react'
import styled from 'styled-components'
import ProfilePic from '../Images/profile-pics.jpg'
const ProfileCard = () => {
  return (
    <Profilecard>
      <ProfileImg>
        {' '}
        <img src={ProfilePic} alt={'logoimg'} />
      </ProfileImg>
      <ProfileImg>
        {' '}
        <img src={ProfilePic} alt={'logoimg'} />
      </ProfileImg>
      <ProfileImg>
        {' '}
        <img src={ProfilePic} alt={'logoimg'} />
      </ProfileImg>
      <ProfileImg>
        {' '}
        <img src={ProfilePic} alt={'logoimg'} />
      </ProfileImg>
      <ProfileImg>
        {' '}
        <img src={ProfilePic} alt={'logoimg'} />
      </ProfileImg>
      <ProfileImg>
        {' '}
        <img src={ProfilePic} alt={'logoimg'} />
      </ProfileImg>
      <ProfileImg>
        {' '}
        <img src={ProfilePic} alt={'logoimg'} />
      </ProfileImg>
      <ProfileImg>
        {' '}
        <img src={ProfilePic} alt={'logoimg'} />
      </ProfileImg>
      <ProfileImg>
        {' '}
        <img src={ProfilePic} alt={'logoimg'} />
      </ProfileImg>
      <ProfileImg>
        {' '}
        <img src={ProfilePic} alt={'logoimg'} />
      </ProfileImg>
    </Profilecard>
  )
}

export default ProfileCard
const Profilecard = styled.span`
  display: grid;
  grid-template-columns: 18% 18% 18% 18% 18%;
  grid-gap: 10px 20px;
`
const ProfileImg = styled.div`
  height: 350px;
  width: 245px;

  img {
    height: 100%;
    width: 100%;
    border-radius: 7px;
  }
`
