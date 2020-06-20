import React from "react"
import styled from "styled-components"

import Paper from "@material-ui/core/Paper"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import { device } from "../styles/device"

let Description = ""

const Wrapper = styled.div`
  /* border: 1px solid red; */
  height: 150px;
  max-width: 100%;
  padding: 1%;

  .Paper {
    /* border: 1px solid red; */
    height: 100px;
    margin: 0.5rem;
    border-top: 3px solid #00dffc;
  }

  @media ${device.laptop} {
    /* border: 1px solid red; */
  }
`
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ProfileImage = styled.div`
  width: 12rem;
  border-radius: 100%;
  margin-left: 3rem;
  margin-top: 3rem;

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
        avatar: file(absolutePath: { regex: "/naim_profile.png/" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 99) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return (
    <Wrapper>
      <Paper className="Paper" elevation={3}>
        <Flex>
          <ProfileImage>
            <Paper elevation={3} className="Profile__Paper">
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
