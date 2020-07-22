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
import { PRIMARY } from "../utils/constants"
import About from "./About"

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
    backgroundColor: "red",
  },
}))

// styles
const Container = styled.div`
  /* background-color: ${props => props.theme.SECONDARY}; */
`
let TabsOverride = styled.div`
  /* border: 1px solid red; */
  & button {
    /* border: 1px solid red; */
    height: 20px;
    font-size: 1.4rem;
    font-weight: 600;
  }
  .Mui-selected {
    /* border-bottom:2px solid blue !important; */
    /* border-right:1px solid red; */
  }

  .MuiTabs-indicator {
    /* border:1px solid red; */
    background-color: #ffff;
  }
  .n-Active {
    color: ${props => props.theme.PRIMARY};
    border: 2px solid ${props => props.theme.PRIMARY};
    border-radius: 7%;
  }

  .n-inActive {
    background-color: #f1edf6;
    border-bottom: 2px solid ${props => props.theme.PRIMARY};
    border-radius: 3%;
  }
`

export default function Panel(props) {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    console.log("handleChange -> newValue", newValue)
    setValue(newValue)
  }

  return (
    <Container>
      {/* <div className={classes.root}> */}
      <Paper>
        <TabsOverride>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            variant="fullWidth"
            // indicatorColor={'PRIMARY'}
          >
            <Tab
              label="About"
              className={value == 0 ? "n-Active" : "n-inActive"}
            />
            <Tab
              label="Articles"
              className={value == 1 ? "n-Active" : "n-inActive"}
            />
            <Tab
              label="Projects"
              className={value == 2 ? "n-Active" : "n-inActive"}
            />
          </Tabs>
        </TabsOverride>
      </Paper>
      <TabPanel value={value} index={0}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Articles />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Projects
      </TabPanel>
    </Container>
  )
}
