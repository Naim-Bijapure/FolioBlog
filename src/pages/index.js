import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import styled, { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import Panel from "../components/Panel"
import { PRIMARY, SECONDARY } from "../utils/constants"
import Footer from "../components/Footer"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

const theme = {
  PRIMARY: PRIMARY,
  SECONDARY: SECONDARY,
}
export default function SimpleTabs(props) {
  const classes = useStyles()

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Header />
        <Panel />
        <Footer />
      </ThemeProvider>
    </Container>
  )
}

// styles
const Container = styled.div`
  background-color: ${SECONDARY};
`
