import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { size } from "../../index.styles";

const HomePageLinksWrapper = styled.section`
  /* display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  margin: auto;
  min-height: 50vw;
  justify-content: center; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 7rem;
  padding-top: 0rem;
  /* width: 50vw; */
  margin: auto;
  @media (max-width: ${size.tablet}) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`

const OuterLink = styled.a`
  text-decoration: none;
  min-width: 8em;
  margin: 1em;
`

const InnerLink = styled(AniLink)`
  min-width: 6em;
  margin: 1em;
  text-decoration: none;
  padding: 2rem;
`
const HomePageLinks = props => {
  const data = useStaticQuery(
    graphql`
      {
        allContentfulHomePageLinks {
          edges {
            node {
              externalUrl
              title
              internalLink
              id
              image {
                fluid(maxWidth: 500) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
                fixed {
                  src
                  srcSet
                  base64
                  aspectRatio
                }
              }
              order
            }
          }
        }
      }
    `
  )

  let links = data.allContentfulHomePageLinks.edges

  const generateLink = item => {
    let renderedLink
    if (item.node.internalLink) {
      renderedLink = (
        <InnerLink fade to={item.node.internalPage.slug} key={item.node.id}>
          <Img fluid={item.node.image.fluid} alt={item.node.title} />
          {/* <p> {item.node.title} </p> */}
        </InnerLink>
      )
    } else {
      renderedLink = (
        <OuterLink
          target="_blank"
          href={item.node.externalUrl}
          key={item.node.id}
        >
          <Img fluid={item.node.image.fluid} alt={item.node.title} />
          {/* <p> {item.node.title} </p> */}
        </OuterLink>
      )
    }
    return renderedLink
  }


  links = links.sort((a, b) => {
    return a.node.order - b.node.order;
  });

  return (
    <HomePageLinksWrapper>
      {links.map(item => generateLink(item))}
    </HomePageLinksWrapper>
  )
}

export default HomePageLinks
