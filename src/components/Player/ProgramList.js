import React, { useRef, useState } from 'react'
import { VerticalList } from '../../react-keys'
import moment from 'moment'
import Sticky from 'react-sticky-el';

import ProgramComponent from './Program'

import Program from '../../styles/Program'
import Text from '../../styles/Text'

const { H1 } = Text

const ProgramList = (props) => {
  const containerRef = useRef(null)

  const [current, setCurrent] = useState('')

  const getProgramLiveUrl = (program) => {
    setCurrent(program._id)
    if(program.status === 'current') {
      props.getChannelLiveUrl()
    } else {
      props.getProgramLiveUrl(program)
    }
  }

  return (
    <Program.Container show={props.show}>
      <H1 mb="20px" pl="15px">{props.channelName}</H1>
      <Program.List ref={containerRef}>
        <VerticalList retainLastFocus={true}>
          {props.programs && Object.keys(props.programs).map((day) => (
              <div key={day}>
                <Sticky scrollElement={containerRef.current}>
                  <Program.Header>{moment(day).format("DD MMMM")}</Program.Header>
                </Sticky>
                {props.programs[day].map((program) => <ProgramComponent current={current ? program._id === current : program.status === 'current'} key={program._id} onClick={(program) => getProgramLiveUrl(program)} program={program} />)}
              </div>
          ))}
        </VerticalList>
      </Program.List>
    </Program.Container>
  )
}

export default ProgramList