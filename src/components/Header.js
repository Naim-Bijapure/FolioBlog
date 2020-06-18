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

  .Paper {
    /* border: 1px solid red; */
    height: 100px;
    margin: 0.5rem;
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

const Description = styled.div`
  /* border: 1px solid blue; */
  margin: 0rem 1rem 5rem 0.5rem;
  font-size: 1.3rem;
  line-height: 2rem;

  @media  ${device.tablet}  {
    /* border: 1px solid red; */
    width: 50%;
    font-size: 1.7rem;
    line-height:2.3rem;
    
    display: flex;
    flex-direction: column;
    
    & ${Description}:nth-child(2) {
      /* border: 1px solid red; */
      margin-left:2.5rem;
    }

    & ${Description}:nth-child(3) {
      margin-left:5rem;
    }

    & ${Description}:nth-child(4) {
      margin-left:9rem;
      position:relative;
      width:30rem;
      text-align:center;
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
            <div> Hi,It's <b> Naim</b> </div>
            <div>I am a, </div>
            <div> Full Stack Developer</div>
            <div>I Build Thing's... </div>
          </Description>
        </Flex>
      </Paper>
    </Wrapper>
  )
}
