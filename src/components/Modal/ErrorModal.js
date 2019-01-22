import React from 'react'
import ReactModal from "react-modal"
import Navigation from '../../react-keys'
import FocusItem from '../FocusItem'
import Modal from '../../styles/Modal'
import Layout from '../../styles/Layout'
import Input from '../../styles/Input'

const { Flex } = Layout
const { Button } = Input

const style = {
  overlay: {
    background: 'rgba(255, 255, 255, 0.2)'
  },
  content: {
    background: 'black',
    borderRadius: 'none',
    border: 'none',
    width: '50%',
    height: '50%',
    margin: 'auto auto',
    overflow: 'hidden'
  }
}

const ErrorModal = (props) => {
  return (
    <ReactModal isOpen ariaHideApp={false} onRequestClose={props.hide} 
      style={style}
      // overlayClassName={Modal.Overlay.styledComponentId} 
      // className={Modal.styledComponentId}
    >
      <Navigation>
        <Flex flexDirection="column" justifyContent="center" alignItems="center" height="100%" p="0 50px">
          <Modal.Title>{props.title}</Modal.Title>
          <Modal.Body>{props.body}</Modal.Body>
          <FocusItem forceFocus={true}>
            <Button onClick={props.hide}>{props.button}</Button>
          </FocusItem>
        </Flex>
      </Navigation>
    </ReactModal>
  )
}

export default ErrorModal