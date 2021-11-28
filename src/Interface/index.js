import React from 'react'
import styled from 'styled-components'
import LogoImg from '../Images/logo.png'
import ProfileCard from '../components/ProfileCard'
import TabItem from '../components/TabItem'
import SideBarItem from '../components/SideBarItem'
import NavBarItems from './NavBarItems'

const Tabitem = [
  {
    type: 'World',
  },
  {
    type: 'Following',
  },
  {
    type: 'Popular',
  },
  {
    type: 'Post',
  },
  {
    type: 'Gender',
  },
  {
    type: 'Location',
  },
  {
    type: 'Profession',
  },
  {
    type: 'Professional',
  },
  {
    type: 'Travels',
  },
]
const index = () => {
  return (
    <Interface>
      <SidebarWrapper>
        <SidebarContent>
          <Logo>
            <img src={LogoImg} alt={'logoimg'} />
          </Logo>
          <Sidebaritem>
            <SideBarItem />
          </Sidebaritem>
        </SidebarContent>
      </SidebarWrapper>
      <Main>
        <Header>
          <NavBarItems />
        </Header>
        <Subheader>
          {Tabitem.map((data) => (
            <TabItem type={data.type} onclick={''} />
          ))}
        </Subheader>
        <Body>
          <ProfileCard />
        </Body>
      </Main>
    </Interface>
  )
}

export default index
const Interface = styled.div`
  display: grid;
  grid-template-columns: 18% 82%;
  height: 923px;
`
const SidebarWrapper = styled.div`
  border-right: 1px solid #ccc;
`
const SidebarContent = styled.div`
  padding: 30px 35px 0 70px;
`
const Logo = styled.div`
  margin-bottom: 50px;
`
const Sidebaritem = styled.div``
const Main = styled.div`
  padding: 30px 30px 0 40px;
`
const Header = styled.div`
  margin-bottom: 20px;
  height: 50px;
`
const Subheader = styled.div`
  margin-bottom: 30px;
  line-height: 3;
`
const Body = styled.div``
