import React from "react"
import Layout from "../components/layout/layout"
import { PageWrapper } from "./page.styles";

const Video = props => {
  const renderComponent = <PageWrapper></PageWrapper>

  return (
    <Layout>
      <PageWrapper>
        <p> Video </p>
      </PageWrapper>
    </Layout>
  )
}

export default Video
