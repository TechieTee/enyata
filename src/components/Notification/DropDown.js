import React from 'react'
import styled from 'styled-components'
import DropDownItem from './DropDownItem'

const DropDown = (props) => {
  return (
    <NotificationResult>
      <DropDownItem
        New={true}
        match={props.match}
        matchnum={props.matchnum}
        time={props.time}
      />
      <DropDownItem
        match={props.match}
        matchnum={props.matchnum}
        time={props.time}
      />
    </NotificationResult>
  )
}

export default DropDown

/*styled component  */
const NotificationResult = styled.div`
  width: 300px;
  border-radius: 5px;
  padding: 5px;
  background: #e8e8e8;
  margin: 30px 0 0 -25px;
`
