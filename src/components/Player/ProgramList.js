import React, { useState, useEffect, useRef } from 'react'
import programAPI from '../../api/programAPI'
import { VerticalList } from '../../react-keys'

import ProgramComponent from './Program'

import Program from '../../styles/Program'
import Text from '../../styles/Text'

const { H1 } = Text

const ProgramList = (props) => {
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    getPrograms()
  }, {})

  const getPrograms = async () => {
    const programs = await programAPI.getProgramListByChannel(props.channelId).then(response => response.data.programs)

    setPrograms(programs)
  }

  return (
    <Program.Container>
      <H1 mb="20px" pl="15px">{props.channelName}</H1>
      <Program.List >
        <VerticalList>
          {programs.map((program, i) => <ProgramComponent program={program} key={i} />)}
        </VerticalList>
      </Program.List>
    </Program.Container>
  )
}

export default ProgramList