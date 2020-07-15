import React from "react"
import styled from "styled-components"

import Paper from "@material-ui/core/Paper"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import { device } from "../styles/device"
import { PRIMARY } from "../utils/constants"

let Description = ""

const Wrapper = styled.div`
  /* border: 1px solid red; */
  height: 155px;
  max-width: 100%;
  padding: 1%;

  .Paper {
    /* border: 1px solid red; */
    height: 100px;
    margin: 0.5rem;
    border-top: 3px solid ${props=>props.theme.PRIMARY};
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
`
const ProfileImage = styled.div`
  width: 12rem;
  border-radius: 100%;
  /* margin-left: 3rem;
  margin-top: 3rem; */
  position: relative;
  top: 1rem;
  right: 1rem;

  img {
    border-radius: 100%;
  }
  .Profile__Paper {
    border-radius: 100%;
  }
`

Description = styled.div`
  /* border: 1px solid blue; */
  position: relative;
  bottom: 2rem;
  font-size: 1.5rem;
  line-height: 2.4rem;
  font-weight: 900;
  top: 1rem;

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
  }
`

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

  return (
    <Wrapper >
      <Paper className="Paper" elevation={6}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          // style="height: 100%; width: 100%;"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d=" M267.68,39.96 C122.64,203.78 462.38,-132.73 503.00,143.58 L500.00,0.00 L-7.15,-0.49 Z "
            // d=" M267.68,39.96 C122.64,203.78 462.38,-132.73 503.00,143.58 L500.00,0.00 L-7.15,-0.49 Z "
            // style="stroke: none; fill: #08f;"
            style={{ stroke: "none", fill: PRIMARY }}
          ></path>

          <path
            d="M-0.94,-68.58 C13.16,348.84 452.22,-16.28 532.35,224.50 L482.69,179.10 L0.00,150.00 Z"
            // d="M-0.94,-68.58 C335.96,-113.98 452.22,-16.8 536.31,-75.49 L446.57,100.16 L86.53,102.14 Z "
            style={{ stroke: "none", fill: PRIMARY }}
          ></path>

        </svg>


        <Flex>
          <ProfileImage>
            <Paper elevation={6} className="Profile__Paper">
              <Image
                fluid={data.avatar.childImageSharp.fluid}
                draggable={false}
              />
            </Paper>
          </ProfileImage>
          <Description>
            <div>Naim Bijapure</div>
            <div> Full Stack Developer</div>
          </Description>
        </Flex>
      </Paper>
    </Wrapper>
  )
}
