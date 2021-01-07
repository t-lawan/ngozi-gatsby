import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle, size } from "../../index.styles";
import Navbar from "../navbar/navbar";
import Header from "../header/header";
import Footer from "../footer/footer";
import styled from "styled-components"
import SiderbarLinks from "../sidebar-links/sidebar-links";

const LayoutWrapper = styled.div`
  max-height: 100vh;
`

const MainWrapper = styled.main`

`
export const TwoColumnSection = styled.div`
  display: grid;
  grid-template-columns: 9fr 1fr;
  grid-column-gap: 1rem;
  @media (max-width: ${size.tablet}) {
    grid-template-columns: 11fr 1fr;
  }
  /* margin-top: 2rem; */
`
const Layout = (props) => {

  return (
    <LayoutWrapper>
        <GlobalStyle />
        <Header />
        {/* <Navbar /> */}
        <MainWrapper> 
          <TwoColumnSection>
            {props.children} 
            <SiderbarLinks />
          </TwoColumnSection>
        </MainWrapper>
        {/* <Footer /> */}
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
