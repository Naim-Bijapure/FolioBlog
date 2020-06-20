import Box from "@material-ui/core/Box"
import { makeStyles } from "@material-ui/core/styles"
import Tab from "@material-ui/core/Tab"
import Tabs from "@material-ui/core/Tabs"
import Typography from "@material-ui/core/Typography"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Paper from "@material-ui/core/Paper"

import Articles from "../components/Articles"

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

// styles
let TabsOverride = styled.div`
  /* border: 1px solid red; */
  & button {
    /* border: 1px solid red; */
    font-size: 1.4rem;
    font-weight: 600;
    height:20px;
  }
  .Mui-selected{
      /* border-bottom:2px solid blue !important; */
      /* border-right:1px solid red; */
  }

.MuiTabs-indicator{
    /* border:1px solid red; */
    background-color:#00dffc;
}
`

export default function Panel(props) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Paper>
        <TabsOverride>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            variant="fullWidth"
            // indicatorColor={'#00dffc'}
          >
            <Tab label="About" />
            <Tab label="Articles" />
            <Tab label="Projects" />
          </Tabs>
        </TabsOverride>
      </Paper>
      <TabPanel value={value} index={0}>
        About
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Articles />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Projects
      </TabPanel>
    </div>
  )
}
