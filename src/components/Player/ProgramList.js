import React, { useState, useEffect, useRef } from 'react'
import channelAPI from '../../api/channelAPI'
import { VerticalList } from '../../react-keys'
import FocusItem from '../FocusItem'
import moment from 'moment'

import Program from '../../styles/Program'
import Text from '../../styles/Text'

const { H1 } = Text

const ProgramList = (props) => {
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    getPrograms()
  }, {})

  const getPrograms = async () => {
    const programs = await channelAPI.getProgramListByChannel(props.channelId).then(response => response.data.programs)

    setPrograms(programs)
  }

  return (
    <Program.Container>
      <H1 mb="20px" pl="15px">{props.channelName}</H1>
      <Program.List >
        <VerticalList>
          {programs.map((program, i) => (
            <FocusItem key={i} >
              <Program>
                <Program.Time>{moment(program.start).format('HH:MM')}</Program.Time>
                <Program.Title>{program.title}</Program.Title>
              </Program>
            </FocusItem>
          ))}
        </VerticalList>
      </Program.List>
    </Program.Container>
  )
}

export default ProgramList