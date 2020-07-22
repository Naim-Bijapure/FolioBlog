import React from "react"
import styled from "styled-components"

export default function Footer() {
  return <Container>Made With :love By Naim Bijapure</Container>
}

const Container = styled.div`
  position: relative;
  top: 20px;
  padding:.5rem;
  text-align: center;
  background-color: ${props => props.theme.SECONDARY};
  border-top: 0.1px solid ${props => props.theme.PRIMARY};
  color: ${props => props.theme.PRIMARY};
  font-size:small;
`
