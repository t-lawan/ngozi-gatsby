import React from "react"
import Layout from "../components/layout/layout"
import { PageWrapper } from "./page.styles";
import HomePageLinks from "../components/homepagelinks/homepagelinks";

const Home = props => {
  return (
    <Layout>
      <PageWrapper>
        <HomePageLinks />
      </PageWrapper>
    </Layout>
  )
}

export default Home
