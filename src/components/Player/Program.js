import React from 'react'
import FocusItem from '../FocusItem'
import moment from 'moment'

import ProgramStyles from '../../styles/Program'

const Program = (props) => {
  const { program } = props
  
  return (
    <>
      {
        program.status === "after" && 
        <ProgramStyles after={true}>
          <ProgramStyles.Time>{moment(program.start).format('HH:MM')}</ProgramStyles.Time>
          <ProgramStyles.Title>{program.title}</ProgramStyles.Title>
        </ProgramStyles>
      }
      {
        program.status === "before" && 
        <FocusItem>
          <ProgramStyles>
            <ProgramStyles.Play>▶️</ProgramStyles.Play>
            <ProgramStyles.Time>{moment(program.start).format('HH:MM')}</ProgramStyles.Time>
            <ProgramStyles.Title>{program.title}</ProgramStyles.Title>
          </ProgramStyles>
        </FocusItem>
      }
      {
        program.status === "current" &&
        <FocusItem forceFocus={true}>
          <ProgramStyles current={true}>
            <ProgramStyles.Time>{moment(program.start).format('HH:MM')}</ProgramStyles.Time>
            <ProgramStyles.Title>{program.title}</ProgramStyles.Title>
          </ProgramStyles>
        </FocusItem>
      }

    </>
  )
}

export default Program