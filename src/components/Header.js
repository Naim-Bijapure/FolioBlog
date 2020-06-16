import React from "react"
import styled from "styled-components"

import Paper from "@material-ui/core/Paper"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import { device } from "../styles/device"

const Wrapper = styled.div`
  /* border: 1px solid red; */
  height: 150px;
  width: 100%;
  padding: 1%;

  /* margin-bottom: 5%; */
  .Paper {
    /* border: 1px solid red; */
    height: 100px;
    /* width: 100rem; */
    /* padding: 1%; */
  }
`
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ProfileImage = styled.div`
  width: 12rem;
  /* height: 10%; */
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

const Description = styled.div`
  /* border: 1px solid blue; */
  margin:2.5rem 0rem 4rem .5rem;
  /* margin-right:1rem; */
  font-size:1.5rem;
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
            <div>Hi,It's Naim </div>
            <div>I am a,  </div>
            <div>  full  Stack  Developer</div>
          </Description>
        </Flex>
      </Paper>
    </Wrapper>
  )
}
