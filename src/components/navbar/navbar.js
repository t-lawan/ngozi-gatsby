import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const NavWrapper = styled.nav`
  display: flex;
  z-index: 300;
`

const NavInner = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
`

const NavItem = styled(AniLink)`
  display: block;
  padding: 8px 16px;
  text-decoration: none;
`
const Navbar = props => {
  const data = useStaticQuery(
    graphql`
      {
        allContentfulNavbarLinks {
          edges {
            node {
              id
              title
              displayedTitle
              page {
                slug
              }
              order
            }
          }
        }
      }
    `
  )

  const navbarItems = data.allContentfulNavbarLinks.edges.sort((a,b) => {
    return a.node.order - b.node.order;
  })
  return (
    <NavWrapper>
      <NavInner>
        {navbarItems.map(item => (
          <NavItem fade key={item.node.id} to={item.node.page.slug}>
            {" "}
            {item.node.displayedTitle}{" "}
          </NavItem>
        ))}
      </NavInner>
    </NavWrapper>
  )
}

export default Navbar
