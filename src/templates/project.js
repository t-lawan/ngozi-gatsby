import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { PageWrapper } from "./page.styles";
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from 'styled-components';

const ProjectWrapper = styled(PageWrapper)`
  padding: 1em 2em;
`

const ProjectParagraph = styled.p`
  color: white;
`

const ProjectOrderedList = styled.ul`
  list-style-type: square;
`

const Project = props => {

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <p>{text}</p>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <ProjectParagraph>{children}</ProjectParagraph>,
      [BLOCKS.OL_LIST]: (node, children) => <ProjectOrderedList> {children} </ProjectOrderedList>,
      [BLOCKS.LIST_ITEM]: (node, children) => <ProjectParagraph> {children} </ProjectParagraph>,
      // [BLOCKS.EMBEDDED_ASSET]: (node, children) => <img src={node.data.target.fields.file['en-US'].url} alt={node.data.target.fields.title['en-US']} />
    },
    renderText: text => text.replace('!', '?'),
  };

  const text = documentToReactComponents(props.pageContext.content.json, options);
  return (
    <Layout>
      <SEO title="Project" />
      <ProjectWrapper>
        {text}
        {/* <p> Project </p> */}
      </ProjectWrapper>
    </Layout>
  )
}

export default Project
