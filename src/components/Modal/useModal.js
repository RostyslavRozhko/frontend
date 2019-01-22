import { useContext, useEffect, useState, useCallback, useMemo } from 'react'
import ModalContext from './ModalContext'
import ErrorModal from './ErrorModal'

const modalsComponents = {
  ERROR: ErrorModal
}

const generateModalKey = (() => {
  let count = 0

  return () => `${++count}`
})();

export const useModal = (component) => {
  if(typeof component === 'string'){
    component = modalsComponents[component]
  }
  const key = useMemo(generateModalKey, [])
  const modal = useMemo(() => component)
  const context = useContext(ModalContext)
  const [isShown, setShown] = useState(false)
  const [options, setOptions] = useState({})
  const showModal = useCallback((options) => {
    setShown(true)
    setOptions(options)
  }, [])
  const hideModal = useCallback(() => setShown(false), [])

  useEffect(
    () => {
      if (isShown) {
        const props = {
          ...options,
          hide: () => setShown(false)
        }
        context.showModal(key, modal, props)
      } else {
        context.hideModal(key)
      }

      return () => context.hideModal(key)
    },
    [modal, isShown, options]
  );

  return [showModal, hideModal]
};