import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const FooterWrapper = styled.footer`
  padding: 1em;
  position: fixed;
  text-align: center;
  bottom: 0;
  width: 100vw;
`

const FooterLink = styled.a`
    padding: 0em 1em;
`
const Footer = props => {
  const data = useStaticQuery(
    graphql`
      {
        allContentfulSocialMediaLink {
          edges {
            node {
              id
              name
              showInContactPage
              showInFooter
              url
            }
          }
        }
      }
    `
  )

  const socialMediaLinks = data.allContentfulSocialMediaLink.edges.filter((item) => {
      return !item.showInFooter;
  });
  
  return (
    <FooterWrapper>
      {socialMediaLinks.map((item) => (
          <FooterLink key={item.node.id} target="_blank" href={item.node.url}> {item.node.name}</FooterLink>
      ))}
    </FooterWrapper>
  )
}

export default Footer
