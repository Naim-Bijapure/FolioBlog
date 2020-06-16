import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function TestCompo(props) {
  const data = useStaticQuery(
    graphql`
      query TestCompoQuery {
        site {
          siteMetadata {
            description
          }
        }
      }
    `
  )
  console.log("TestCompo ->  data",  data)

  return <div>hello world</div>
}

// export const query =
