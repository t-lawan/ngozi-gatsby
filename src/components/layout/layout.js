/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
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
