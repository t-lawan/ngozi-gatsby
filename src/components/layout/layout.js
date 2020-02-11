import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "../../index.styles";
import Navbar from "../navbar/navbar";
import Header from "../header/header";
import Footer from "../footer/footer";
import styled from "styled-components"

const LayoutWrapper = styled.div`
  max-height: 100vh;
`
const Layout = (props) => {

  return (
    <LayoutWrapper>
        <GlobalStyle />
        <Header />
        <Navbar />
        <main> {props.children} </main>
        <Footer />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
