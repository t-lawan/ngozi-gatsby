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

const Layout = (props) => {

  return (
    <>
        <GlobalStyle />
        <div>
            <h1> Navbar </h1>
        </div>
        <main> {props.children} </main>
        <footer> Footer</footer>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
