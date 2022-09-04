import { useState } from 'react'

interface ButtonProps {
  text: string
  children?: React.ReactNode
}

const ModalButton = (props: ButtonProps): JSX.Element => {
  const [hidden, setHidden] = useState(true)

  const toggleState = () => {
    setHidden(!hidden)
  }

  const { text, children } = props
  return (
    <>
      <button className="custom-button modal-button" onClick={toggleState}>
        {text}
      </button>
      <div className={`modal ${hidden ? 'hide' : ''}`}>
        <button className="close-button" onClick={toggleState}>
          <span className="cross" />
        </button>
        {children}
      </div>
    </>
  )
}

export default ModalButton
