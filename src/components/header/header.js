import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { size } from "../../index.styles";

const Image = styled(Img)``

const ImageWrapper = styled.div`
width: 15%;
  @media (max-width: ${size.tablet}) {
    width: 20%;
    visibility: hidden;
  }
  
`
const HeaderWrapper = styled.header`
  padding: 1em;
  /* text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
`
const Header = props => {
  const data = useStaticQuery(
    graphql`
      {
        contentfulAsset(title: { eq: "logo" }) {
          fluid(maxWidth: 500) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    `
  )

  const imageObject = data.contentfulAsset;

  return (
    <HeaderWrapper>
      <ImageWrapper>
        <Image fluid={imageObject.fluid} alt="Logo" />
      </ImageWrapper>
      <h1> anja ngozi </h1>
    </HeaderWrapper>
  )
}

export default Header
