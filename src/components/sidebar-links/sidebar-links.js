import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { size } from "../../index.styles"
import { graphql, useStaticQuery } from "gatsby"

const LinkWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  text-align: end;
  justify-content: space-evenly;
  height: 80vh;
  @media (max-width: ${size.tablet}) {
    display: ${props => (props.hideInMobile ? "none" : "flex")};
    padding: 0;
  }
`

const ExternalLink = styled.a`
  padding-top: 2rem;
  transform: rotate(90deg);
  font-size: 1.1rem;
  text-decoration: none;
  /* @media (max-width: ${size.tablet}) {
    transform: rotate(0deg);
    font-size: 1.2rem;
    display: ${props => (props.showinmob ? "inherit" : "none")};
  } */
`

const InternalLink = styled(Link)`
  padding-top: 2rem;
  transform: rotate(90deg);
  font-size: 1.1rem;
  @media (max-width: ${size.tablet}) {
    transform: rotate(0deg);
    font-size: 1.2rem;
    display: ${props => (props.showinmob ? "inherit" : "none")};
  }
`

const SiderbarLinks = props => {
  const data = useStaticQuery(
    graphql`
      {
        allContentfulSidebarLinks {
          edges {
            node {
              externalUrl
              internalLink
              order
              title
              id
            }
          }
        }
      }
    `
  )

  let links = data.allContentfulSidebarLinks.edges;

  return (
    <LinkWrapper hideInMobile={props.hideInMobile}>
      {links.map((li, index) =>
        !li.node.internalLink ? (
          <ExternalLink
            showinmob={true}
            href={li.node.externalUrl}
            target="__blank"
            key={index}
          >
            {li.node.title}
          </ExternalLink>
        ) : null
      )}
    </LinkWrapper>
  )
}

export default SiderbarLinks
