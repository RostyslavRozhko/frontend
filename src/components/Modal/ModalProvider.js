import React, { useCallback, useState, useMemo } from 'react'
import ModalContext from './ModalContext'
import ModalRoot from './ModalRoot'

const ModalProvider = ({ container, children }) => {
  const [modals, setModals] = useState({})
  const showModal = useCallback(
    (key, modal, props) =>
      setModals(modals => ({
        ...modals,
        [key]: {
          Component: modal,
          props
        }
      })),
    []
  )

  const hideModal = useCallback(
    (key) =>
      setModals(modals => {
        const newModals = { ...modals }
        delete newModals[key]
        return newModals
      }),
    []
  )

  const contextValue = useMemo(() => ({ modals, showModal, hideModal }), [
    modals
  ])

  return (
    <ModalContext.Provider value={contextValue}>
      <>
        {children}
        <ModalRoot container={container} />
      </>
    </ModalContext.Provider>
  )
}

export default ModalProvider