import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import Header from "../components/Header"
import Panel from "../components/Panel"




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function SimpleTabs(props) {
  const classes = useStyles()


  return (
    <div className={classes.root}>
      <Header />
      <Panel />
    </div>
  )
}
