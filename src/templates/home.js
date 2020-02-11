import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { PageWrapper } from "./page.styles"
import HomePageLinks from "../components/homepagelinks/homepagelinks"

const Home = props => {
  return (
    <Layout>
      <SEO title="Home" />
      <PageWrapper>
        <HomePageLinks />
      </PageWrapper>
    </Layout>
  )
}

export default Home
