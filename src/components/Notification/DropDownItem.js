import React from 'react'
import styled from 'styled-components'
import { Arrow, UserIcon } from '../SvgIcons'

const DropDownItem = (props) => {
  return (
    <NotificationResultItem
    //   className={
    //     props.New
    //       ? classes.NewNotificationResultItem
    //       : classes.NotificationResultItem
    //   }
    >
      <ActiveIcon
      // className={props.New ? classes.ActiveIcon : classes.InactiveIcon}
      >
        <UserIcon />
      </ActiveIcon>

      {/* <MatchIcon>{props.New ? activeicon : inactiveicon}</MatchIcon> */}

      <NotificationText>
        {props.match} <br />
        {props.matchnum}
      </NotificationText>

      <NotificationTime>{props.time}</NotificationTime>
    </NotificationResultItem>
  )
}

export default DropDownItem
/*styled component  */
const NotificationResultItem = styled.div`
  ${'' /* margin-bottom: 2px; */}
  display: grid;
  grid-template-columns: 25% 65% 10%;
  padding: 15px 10px 15px 10px;
  background: #f5f5f5;
`
const ActiveIcon = styled.span`
  ${'' /* padding-left: 20px; */}
`
const MatchIcon = styled.div`
  padding-left: 25px;
`
const NotificationText = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 116%;
  display: flex;
  align-items: center;
  color: #18a0fb;
`
const NotificationTime = styled.span`
  margin-top: 10px;
`

//   .InactiveIcon{
//     padding-left: 20px;
//     visibility: hidden;
//   }

//   .NewNotificationResultItem {
//     margin-bottom: 2px;
//     display: flex;
//     padding: 15px 10px 15px 10px;
//     background: #fff;
//   }

//    .NotificationResultItem .NotificationText {
//     padding-left: 30px;
//     color:#8c8c8c!important;
//   }

//   .NewNotificationResultItem .NotificationText {
//     padding-left: 30px;
//   }
