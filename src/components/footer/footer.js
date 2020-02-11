import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  fab,
  faFacebook,
  faFacebookF,
  faInstagram,
  faSoundcloud,
  faMixcloud,
} from "@fortawesome/free-brands-svg-icons"
library.add(fab, faFacebook, faFacebookF, faInstagram, faSoundcloud, faMixcloud)

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
              isEmail
              email
            }
          }
        }
      }
    `
  )

  const socialMediaLinks = data.allContentfulSocialMediaLink.edges.filter(
    item => {
      return !item.showInFooter
    }
  )

  return (
    <FooterWrapper>
      {socialMediaLinks.map(item => (
        <FooterLink key={item.node.id} target="_blank" href={item.node.url}>
          <FontAwesomeIcon
            icon={
              ["fab", item.node.name.toLowerCase()]
            }
          />
        </FooterLink>
      ))}
    </FooterWrapper>
  )
}

export default Footer
