import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Goo from "gooey-react"
import { Paper, Slide, Zoom } from "@material-ui/core"

import { device } from "../styles/device"
import { PRIMARY } from "../utils/constants"
import Typer from "./Typer"

let Description = ""

export default function Header() {
  const data = useStaticQuery(
    graphql`
      query ProfileQuery {
        avatar: file(absolutePath: { regex: "/naim_profile-1.jpg/" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 99, maxHeight: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const [isSlide, setisSlide] = useState(false)
  const [isZoomProfile, setisZoomProfile] = useState(false)
  const [isZoomDescription, setisZoomDescription] = useState(false)
  useEffect(() => {
    // SLIDE AFTER 1 SEC
    setTimeout(() => {
      setisSlide(true)
    }, 800)

    // ZOOM PROFILE PICTURE

    setTimeout(() => {
      setisZoomProfile(true)
    }, 2000)

    // ZOOM PROFILE PICTURE
    setTimeout(() => {
      setisZoomDescription(true)
    }, 3000)
  }, [])

  return (
    <Wrapper>
      <Slide in={isSlide} timeout={1000}>
        <Paper className="Paper" elevation={6}>
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            // style="height: 100%; width: 100%;"
            style={{ height: "100%", width: "100%" }}
          >
            <defs>
              <filter id="p1" x="0" y="0">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
              </filter>
            </defs>

            <path
              d=" M267.68,39.96 C122.64,203.78 462.38,-132.73 503.00,143.58 L500.00,0.00 L-7.15,-0.49 Z "
              // d=" M267.68,39.96 C122.64,203.78 462.38,-132.73 503.00,143.58 L500.00,0.00 L-7.15,-0.49 Z "
              // style="stroke: none; fill: #08f;"
              style={{ stroke: "none", fill: PRIMARY }}
              filter="url(#p1)"
            ></path>

            {/* <path
              d="M-0.94,-68.58 C13.16,348.84 452.22,-16.28 532.35,224.50 L482.69,179.10 L0.00,150.00 Z"
              // d="M-0.94,-68.58 C335.96,-113.98 452.22,-16.8 536.31,-75.49 L446.57,100.16 L86.53,102.14 Z "
              style={{ stroke: "none", fill: PRIMARY }}
              filter="url(#p1)"
            ></path> */}
          </svg>

          <Flex>
            <Zoom in={isZoomProfile} timeout={1000}>
              <ProfileImage>
                <Paper elevation={6} className="Profile__Paper">
                  <Image
                    fluid={data.avatar.childImageSharp.fluid}
                    draggable={false}
                  />
                </Paper>
              </ProfileImage>
            </Zoom>

            <Zoom in={isZoomDescription} timeout={1000}>
              <Description>
                <div className="Name">Naim Bijapure,</div>
                {/* <div> Full Stack Web Developer</div> */}
                <Typer
                  titleText={[
                    "Full Stack Web Developer",
                    "I build things for web...",
                  ]}
                />
              </Description>
            </Zoom>
          </Flex>
        </Paper>
      </Slide>
    </Wrapper>
  )
}

// STYLES
const Wrapper = styled.div`
  /* border: 1px solid red; */
  height: 155px;
  max-width: 100%;
  padding: 1%;

  .Paper {
    /* border: 1px solid red; */
    height: 100px;
    margin: 0.5rem;
    border-top: 3px solid ${props => props.theme.PRIMARY};
  }

  @media ${device.laptop} {
    /* border: 1px solid red; */
  }
`
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 9.5rem;
  /* border:1px solid red; */
`
const ProfileImage = styled.div`
  width: 12rem;
  border-radius: 100%;
  /* margin-left: 3rem;
  margin-top: 3rem; */
  position: relative;
  top: 1rem;
  /* right: 1rem; */
  right: 1rem;
  border: 1px solid ${props => props.theme.PRIMARY};
  box-shadow: 0px 0px 9px 1px ${props => props.theme.PRIMARY};

  img {
    border-radius: 100%;
  }
  .Profile__Paper {
    border-radius: 100%;
  }
`

Description = styled.div`
  /* border: 1px solid blue; */
  width: 20rem;
  position: relative;
  bottom: 1rem;
  font-size: 1.3rem;
  line-height: 2rem;
  font-weight: 900;
  top: 1rem;
  color: ${props => props.theme.PRIMARY};
  .Name {
    position: relative;
    width: 11.2rem;
    /* border:1px solid red; */
    background: ${props => props.theme.PRIMARY};
    color: ${props => props.theme.SECONDARY};
    border-radius: 4px;
    text-align: center;
  }
  .Typer {
    background: ${props => props.theme.PRIMARY};
    color: ${props => props.theme.SECONDARY};
    border-radius: 4px;
    text-align: center;
  }

  /*  ABOUT TABLE SCREENS */
  @media ${device.tablet} {
    /* border: 1px solid red; */
    width: 50%;
    font-size: 1.7rem;
    line-height: 2.5rem;
    position: relative;
    left: 2rem;

    & ${Description}:nth-child(2) {
      position: relative;
      left: 4rem;
    }
    .Name {
      width: 21.2rem;
    }
    .Typer {
      text-align: center;
      width:30rem;
    }
  }
`
