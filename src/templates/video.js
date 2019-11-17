import React from "react"
import Layout from "../components/layout/layout"
import { PageWrapper } from "./page.styles"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const VideoItem = styled.article`
  padding: 1em;
`


const Video = props => {
  const data = useStaticQuery(
    graphql`
      {
        allContentfulVideo {
          edges {
            node {
              id
              title
              url
            }
          }
        }
      }
    `
  )

  const videos = data.allContentfulVideo.edges;

  return (
    <Layout>
      <PageWrapper>
        {videos.map(item => (
          <VideoItem key={item.node.id}>
            <iframe
              src={item.node.url}
              width="400"
              height="400"
              title={item.node.title? item.node.title : item.node.id}
              frameBorder="0"
            ></iframe>
            <p> {item.node.title} </p>
          </VideoItem>
        ))}
      </PageWrapper>
    </Layout>
  )
}

export default Video
