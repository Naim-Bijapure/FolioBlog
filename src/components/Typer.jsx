import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

export default function Typer({ titleText }) {
  const [state, setState] = useState({
    text: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: 1500,
  })

  useEffect(() => {
    // setTimeout(() => {
    // }, 2000)
    handleType()
  }, [])

  function handleType() {
    setState(state => {
      // // console.log("handleType -> state", state)
      let dataText = [...titleText]
      const { isDeleting, loopNum, text, typingSpeed } = state
      const i = loopNum % dataText.length
      const fullText = dataText[i]

      setState(state => ({
        ...state,
        text: state.isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
        typingSpeed: state.isDeleting ? 300 : 550,
      }))

      if (!isDeleting && text === fullText) {
        setTimeout(
          () => setState(state => ({ ...state, isDeleting: true })),
          1500
        )
      } else if (isDeleting && text === "") {
        setState(state => ({
          ...state,
          isDeleting: false,
          loopNum: state.loopNum + 1
        }))
      }

      setTimeout(handleType, typingSpeed)
      return state
    })
  }

  return (
    <Container className="Typer">
      <div>
        {state.text} <span id="cursor"></span>
      </div>
      {/* <button onClick={handleType}>click</button> */}
    </Container>
  )
}

// Styles
const Container = styled.div`
  position: relative;
  /* border:1px solid red; */
  #cursor {
    border-left: 0.1em solid white;
    animation: blink 0.7s steps(1) infinite;
  }

  @keyframes blink {
    50% {
      border-color: ${props => props.theme.PRIMARY};
    }
  }
`
