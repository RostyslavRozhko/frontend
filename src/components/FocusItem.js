import React, { useRef } from 'react'
import { Focusable } from '../react-keys'
import scrollIntoView from 'scroll-into-view'

const FocusItem = (props) => {
  const focusEl = useRef(null);

  const setFocus = () => {
    focusEl.current.firstChild.focus()
    focusEl.current.firstChild.classList.add('active')
    scrollIntoView(focusEl.current.firstChild, {
      time: 200,
      align: {
        left: 0
      }
    })
  }

  const setBlur = () => {
    focusEl.current.firstChild.blur()
    focusEl.current.firstChild.classList.remove('active')
  }

  const handleClick = () => {
    focusEl.current.firstChild.click()
  }

  return (
    <Focusable onFocus={setFocus} onBlur={setBlur} onEnterDown={handleClick} >
      <span ref={focusEl}>{props.children}</span>
    </Focusable>
  )
}

export default FocusItem