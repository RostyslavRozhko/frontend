import React from 'react'
import FocusItem from '../FocusItem'
import moment from 'moment'

import ProgramStyles from '../../styles/Program'

const Program = (props) => {
  const { program, current } = props

  return (
    <>
      {
        program.status === "after"
          ? (
            <ProgramStyles after={true}>
              <ProgramStyles.Time>{moment(program.start).format('HH:mm')}</ProgramStyles.Time>
              <ProgramStyles.Title>{program.title}</ProgramStyles.Title>
            </ProgramStyles>
          )
          : (
            <FocusItem forceFocus={current}>
              <ProgramStyles onClick={() => props.onClick(program)} current={current}>
                {program.status === "before" && <ProgramStyles.Play><span role="img" aria-label="could play">▶️</span></ProgramStyles.Play>}
                <ProgramStyles.Time>{moment(program.start).format('HH:mm')}</ProgramStyles.Time>
                <ProgramStyles.Title>{program.title}</ProgramStyles.Title>
              </ProgramStyles>
            </FocusItem>
          )
      }
    </>
  )
}

export default Program