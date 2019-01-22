import React, { useContext, memo } from 'react'
import ReactDOM from 'react-dom'
import ModalContext from './ModalContext'

const ModalRoot = memo(
  ({ container: Container = React.Fragment }) => {
    const { modals } = useContext(ModalContext)

    return ReactDOM.createPortal(
      <Container>
        {Object.keys(modals).map(key => {
          const modal = modals[key]

          const Component = modal.Component
          const props = modal.props

          return <Component key={key} {...props} />
        })}
      </Container>,
      document.body
    );
  }
)

export default ModalRoot