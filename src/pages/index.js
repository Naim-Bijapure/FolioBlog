import React from "react"
import { graphql } from "gatsby"

import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Articles from "../components/Articles"
import Header from "../components/Header"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function SimpleTabs(props) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Header />
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Projects" />
        <Tab label="Articles" />
        <Tab label="About" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Projects
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Articles />
      </TabPanel>
      <TabPanel value={value} index={2}>
        About
      </TabPanel>
    </div>
  )
}
