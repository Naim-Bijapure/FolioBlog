import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import Panel from "../components/Panel"
import {PRIMARY,SECONDARY} from "../utils/constants"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

const theme ={
  PRIMARY:PRIMARY,
  SECONDARY:SECONDARY
}

export default function SimpleTabs(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme} >
        <Header />
        <Panel />
      </ThemeProvider>
    </div>
  )
}
