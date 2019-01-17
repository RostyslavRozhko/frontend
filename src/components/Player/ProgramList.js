import React from 'react'
import { VerticalList } from '../../react-keys'
import moment from 'moment'

import ProgramComponent from './Program'

import Program from '../../styles/Program'
import Text from '../../styles/Text'

const { H1 } = Text

const ProgramList = (props) => {
  return (
    <Program.Container show={props.show}>
      <H1 mb="20px" pl="15px">{props.channelName}</H1>
      <Program.List >
        <VerticalList retainLastFocus={true}>
          {props.programs && Object.keys(props.programs).map((day, i) => (
              <>
                <Program.Header>{moment(day).format("DD MMMM")}</Program.Header>
                {props.programs[day].map((program, i) => <ProgramComponent program={program} />)}
              </>
          ))}
        </VerticalList>
      </Program.List>
    </Program.Container>
  )
}

export default ProgramList