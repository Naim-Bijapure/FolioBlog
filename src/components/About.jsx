import React, { useEffect, useState } from "react"
import Card from "@material-ui/core/Card"
import Paper from "@material-ui/core/Paper"
import Chip from "@material-ui/core/Chip"
import Button from "@material-ui/core/Button"
import Switch from "@material-ui/core/Switch"

import styled from "styled-components"

import { device } from "../styles/device"

export default function About() {
  const [isFlipped, setisFlipped] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    // console.log("About -> useEffect")
    // INITIAL DEMO FLIP
    setTimeout(() => {
      setChecked(true)
      setisFlipped(flipped => {
        setTimeout(() => {
          setChecked(false)
          setisFlipped(flipped => {
            return !flipped
          })
        }, 2000)

        return !flipped
      })
    }, 3000)
  }, [])

  function OnFlip() {
    setChecked(checked => {
      return !checked
    })
    setisFlipped(flipped => !flipped)
  }
  let fronEndSkills = [
    "Reactjs",
    "Angular",
    "Vuejs",
    "React Native",
    "Flutter",
    "Gatsby",
    "Nextjs",
    "Ionic",
    "PHP",
    "WordPress",
    "HTML",
    "CSS3",
    "Javascript",
    "jQuery",
    "Boostrap",
    "Tailwind Css",
  ]
  let backendSkills = [
    "Nodejs",
    "Express",
    "Python",
    "Linux",
    "Git",
    "MySql",
    "mongoDB",
    "GraphQL",
    "AWS",
    "Docker",
    "firebase",
  ]
  return (
    <div>
      <Container>
        <Paper className="Description" elevation={3}>
          I'm a passionate full stack web developer. I love creating beautiful
          Web Applications using MERN or JAM Stacks. Here is the languages/tools
          I enjoy working with :
        </Paper>
        <SkillsSection>
          <div className="skiils__switch">
            <Switch
              checked={checked}
              onChange={OnFlip}
              color="primary"
              name="skillSwitch"
            />
          </div>
          <div className="skills__header">
            {(!isFlipped ? "Front " : "Back ") + "End Skills"}
          </div>

          <div className="skills__flip-section">
            <Paper
              className={["skills", isFlipped ? "is-flipped" : "not-flipped"]}
              elevation={6}
            >
              <div
                className={["skills__face  skills__face--front"]}
                style={{ display: !isFlipped ? "block" : "none" }}
              >
                <div className={`skills__face--chips `}>
                  {fronEndSkills.map(skillName => (
                    <Chip label={skillName} clickable />
                  ))}
                </div>
              </div>

              <div className="skills__face skills__face--back">
                <div className="skills__face--chips">
                  {backendSkills.map(skillName => (
                    <Chip label={skillName} clickable />
                  ))}
                </div>
              </div>
            </Paper>
          </div>

          {/* <div className="skills__button">
            <Button onClick={OnFlip} variant="contained" color="primary">
              {(isFlipped ? "Front " : "Back ") + "End Skills -->"}
            </Button>
          </div> */}
        </SkillsSection>
      </Container>
    </div>
  )
}

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5rem;

  .MuiPaper-root {
    border-radius: 5%;
    border: 0.1px solid ${props => props.theme.PRIMARY};

    @media ${device.laptop} {
      border-radius: 3%;
      border: 0.1px solid ${props => props.theme.PRIMARY};
    }
  }

  .Description {
    padding: 1rem;
    height: 20rem;
    color: ${props => props.theme.PRIMARY};

    @media ${device.laptop} {
      /* border: 1px solid red; */
      /* padding: 2rem; */
      width: 80rem;
      margin: 0 auto;
    }

    &:hover {
      /* border:1px solid red; */
      box-shadow: 0 0 10px 1px ${props => props.theme.PRIMARY};
    }
  }
`
const SkillsSection = styled.div`
  /* border: 1px solid red; */
  margin-top: 1rem;
  width: 100%;
  height: 25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    /* border: 1px solid red; */
    /* padding: 2rem; */
    width: 80rem;
    margin: 0 auto;
  }

  /* border-radius: 100%; */

  .skills__header {
    border-bottom: 0.4rem solid ${props => props.theme.PRIMARY};
  }
  .skills__flip-section {
    /* border: 1px solid red; */
    margin-top: 1rem;
    width: 100%;
    height: 20rem;
    perspective: 900px;
  }

  .MuiPaper-root {
    border-radius: 5%;
    border: 0.1px solid ${props => props.theme.PRIMARY};

    &:hover {
      /* border:1px solid red; */
      box-shadow: 0 0 10px 1px ${props => props.theme.PRIMARY};
    }
  }

  .skills {
    /* border: 1px solid blue; */

    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
  }

  .skills.is-flipped {
    transform: rotateY(180deg);
  }
  .skills__face {
    /* border: 1px solid red; */
    position: absolute;
    width: 100%;
    height: 100%;
    color: white;
    /* line-height: 260px; */
    /* text-align: center; */
    font-weight: bold;
    font-size: 40px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    /*  CHIP OVERRIDE */
    .MuiChip-root {
      font-size: small;
      color: ${props => props.theme.PRIMARY};
      background-color: ${props => props.theme.SECONDARY};
      border: 1px solid ${props => props.theme.PRIMARY};
      margin: 0.2rem;

      @media ${device.laptop} {
        font-size: large;
        margin: .6rem;

      }
    }

    .skills__face--chips {
      display: flex;
      /* justify-content:space-between; */
      flex-wrap: wrap;
      justify-content: center;

      @media ${device.laptop} {
        width: 50rem;
        margin: 0 auto;
      }
    }
  }
  .skills__face--front {
    padding: 10px;
  }

  .skills__face--back {
    padding: 10px;
    transform: rotateY(180deg);
  }
  .skills__button {
    padding: 1rem;
    button {
      color: ${props => props.theme.PRIMARY};
      background-color: ${props => props.theme.SECONDARY};
      border: 1px solid ${props => props.theme.PRIMARY};
    }
  }

  .skills__face--show {
    display: block !important;
  }

  .skills__face--hide {
    display: none !important;
  }

  .skiils__switch {
    .MuiSwitch-root {
      width: 120px;
      height: 40px;
      .Mui-checked {
        color: ${props => props.theme.PRIMARY};
      }
      .MuiSwitch-switchBase.Mui-checked {
        transform: translateX(80px);
      }
      .MuiSwitch-track {
        border: 1px solid ${props => props.theme.PRIMARY};
      }

      /* root end */
    }
  }
`
