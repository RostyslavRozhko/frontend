import React from "react"

const invariantViolation = () => {
  throw new Error(
    "Attempted to call useModal outside of modal context. Make sure your app is rendered inside ModalProvider."
  )
}

const ModalContext = React.createContext({
  modals: {},
  props: {},
  showModal: invariantViolation,
  hideModal: invariantViolation
})

export default ModalContext