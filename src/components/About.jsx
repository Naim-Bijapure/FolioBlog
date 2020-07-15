import React, { useEffect, useState } from "react"
import Card from "@material-ui/core/Card"
import Paper from "@material-ui/core/Paper"
import Chip from "@material-ui/core/Chip"
import Button from "@material-ui/core/Button"

import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5rem;
  background-color: "gray";
  .Description {
    padding: 1rem;
    border: 0.2px solid ${props => props.theme.PRIMARY};
    height: 20rem;

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

  .skills__header {
    border-bottom:.4rem solid ${props=>props.theme.PRIMARY}
  }
  .skills__flip-section {
    /* border: 1px solid red; */
    margin-top: 1rem;
    width: 100%;
    height: 20rem;
    perspective: 900px;
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
    /* line-height: 260px; */
    color: white;
    /* text-align: center; */
    font-weight: bold;
    font-size: 40px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .skills__face--front {
    padding: 10px;
  }

  .skills__face--back {
    transform: rotateY(180deg);
  }
  .skills__button {
      padding:1rem;
    button {
      color: ${props => props.theme.PRIMARY};
      background-color:${props => props.theme.SECONDARY};
    }
  }
`

export default function About() {
  const [isFlipped, setisFlipped] = useState(false)

  useEffect(() => {})

  function OnFlip() {
    setisFlipped(flipped => !flipped)
  }
  return (
    <div>
      <Container>
        <Paper className="Description" elevation={3}>
          I'm a passionate full stack web developer. I love creating beautiful
          Web Applications using MERN or JAM Stacks. Here is the languages/tools
          I enjoy working with :
        </Paper>
        <SkillsSection>
          <div className="skills__header">Front End Skills</div>

          <div className="skills__flip-section">
            <Paper
              className={["skills", isFlipped ? "is-flipped" : "not-flipped"]}
              elevation={6}
            >
              <div
                className="skills__face  skills__face--front"
                style={{ display: !isFlipped ? "block" : "none" }}
              >
                <Chip
                  // size="large"
                  // icon={<FaceIcon />}
                  label="React"
                  clickable
                  color="primary"
                  // onDelete={handleDelete}
                  // deleteIcon={<DoneIcon />}
                />

                {/* <Chip
                // size="large"
                // icon={<FaceIcon />}
                label="React"
                clickable
                color="primary"
                // onDelete={handleDelete}
                // deleteIcon={<DoneIcon />}
              />

              <Chip
                // size="large"
                // icon={<FaceIcon />}
                label="React"
                clickable
                color="primary"
                // onDelete={handleDelete}
                // deleteIcon={<DoneIcon />}
              /> */}
              </div>

              <div className="skills__face skills__face--back">
                <Chip
                  // size="large"
                  // icon={<FaceIcon />}
                  label="Nodejs"
                  clickable
                  color="primary"
                  // onDelete={handleDelete}
                  // deleteIcon={<DoneIcon />}
                />
                {/* <Chip
                // size="large"
                // icon={<FaceIcon />}
                label="React"
                clickable
                color="primary"
                // onDelete={handleDelete}
                // deleteIcon={<DoneIcon />}
              />

              <Chip
                // size="large"
                // icon={<FaceIcon />}
                label="React"
                clickable
                color="primary"
                // onDelete={handleDelete}
                // deleteIcon={<DoneIcon />}
              /> */}
              </div>
            </Paper>
          </div>

          <div className="skills__button">
            <Button onClick={OnFlip} variant="contained" color="primary">
              Backend Skills
            </Button>
          </div>
        </SkillsSection>
      </Container>
    </div>
  )
}
