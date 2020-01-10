import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"

import "../components/css/main.css"
import "../components/css/noscript.css"
import "../components/css/fontawesome-all.min.css"
import "../components/css/post.css"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        description
      }
      html
    }
  }
`
const Blog = props => {
  return (
    <Layout>
      <div id="wrapper">
        <section id="main" className="postContent">
          <div class="inner">
            <h1 class="major">{props.data.markdownRemark.frontmatter.title}</h1>
            <span class="image fit">
              <div
                dangerouslySetInnerHTML={{
                  __html: props.data.markdownRemark.html,
                }}
              ></div>
            </span>
            <p>{props.data.markdownRemark.frontmatter.description}</p>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Blog
