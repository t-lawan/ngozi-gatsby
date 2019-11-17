import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "../../index.styles";
import Navbar from "../navbar/navbar";
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = (props) => {

  return (
    <>
        <GlobalStyle />
        <Header />
        <Navbar />
        <main> {props.children} </main>
        <Footer />

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
