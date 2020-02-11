import React from "react"
import Layout from "../components/layout/layout"
import { PageWrapper } from "./page.styles"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fas, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  fab,
  faFacebook,
  faFacebookF,
  faInstagram,
  faSoundcloud,
  faMixcloud,
} from "@fortawesome/free-brands-svg-icons"
library.add(
  fab,
  fas,
  faFacebook,
  faFacebookF,
  faInstagram,
  faSoundcloud,
  faMixcloud,
  faEnvelope
)

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  display: ${props => (props.show ? "inherit" : "none")};
`

const ContactMeButton = styled.p`
display: ${props => (props.show ? "inherit" : "none")};
  &:hover {
    opacity: 0.7;
  }
`

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  margin: auto;
  min-height: 50vw;
  justify-content: center;
`

const SocialMediaLink = styled.a`
  padding: 0em 1em;
`
class Contact extends React.Component {
  data
  constructor(props) {
    super(props)
    this.state = {
      showSocialMediaLinks: false,
    }
  }

  toggle = () => {
    this.setState({
      showSocialMediaLinks: !this.state.showSocialMediaLinks,
    })
  }

  render() {
    let links = this.props.socialMediaLinks.edges.filter(item => {
      return item.node.showInContactPage
    })
    return (
      <Layout>
        <PageWrapper>
          <ContactWrapper>
            <ContactMeButton onClick={this.toggle} show={!this.state.showSocialMediaLinks}>
              {" "}
              click to contact me{" "}
            </ContactMeButton>
            <SocialMediaWrapper show={this.state.showSocialMediaLinks}>
              {links.map(link => (
                <SocialMediaLink
                  key={link.node.id}
                  target="__blank"
                  href={
                    link.node.isEmail
                      ? `mailto:${link.node.email}`
                      : link.node.url
                  }
                >
                  <FontAwesomeIcon
                    icon={
                      link.node.isEmail
                        ? ["fas", "envelope"]
                        : ["fab", link.node.name.toLowerCase()]
                    }
                  />
                </SocialMediaLink>
              ))}
            </SocialMediaWrapper>
          </ContactWrapper>
        </PageWrapper>
      </Layout>
    )
  }
}

export default () => {
  let data = useStaticQuery(
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

  return <Contact socialMediaLinks={data.allContentfulSocialMediaLink} />
}
