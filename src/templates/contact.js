import React from "react"
import Layout from "../components/layout/layout"
import { PageWrapper } from "./page.styles";
import { useStaticQuery } from "gatsby";
import styled from 'styled-components';

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  display: ${props => props.show ? 'inherit' : 'none'}
`

const ContactMeButton = styled.p`
  &:hover {
    opacity: 0.7;
  }
`
class Contact extends React.Component {
  data;
  constructor(props) {
    super(props);
    this.state = {
      showSocialMediaLinks: false
    }
  }

  toggle = () => {
    this.setState({
      showSocialMediaLinks: !this.state.showSocialMediaLinks
    });
  }

  render() {
    let links = this.props.socialMediaLinks.edges.filter((item) => {
      return item.node.showInContactPage;
    });
    // let links = this.props.socialMediaLinks.edges
    return (
      <Layout>
        <PageWrapper>
          <ContactMeButton onClick={this.toggle}> click to contact me </ContactMeButton>

          <SocialMediaWrapper show={this.state.showSocialMediaLinks}>
            {links.map((link) => (
              <p key={link.node.id}> {link.node.name} </p>
            ))}
          </SocialMediaWrapper>
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
            }
          }
        }
      }
    `
  )

  return (
    <Contact socialMediaLinks={data.allContentfulSocialMediaLink}/>
  )
}

