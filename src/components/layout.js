/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MyQueryAndSiteTitleQuery {
      allProject {
        edges {
          node {
            id
            name
            url
            repo
            build
            description
          }
        }
      },
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { allProject: { edges } } = data;
  const nodes = edges.map(node => {
    const { node: { name, url, id, description, repo, build } } = node;
    return (
      <ul key={id}>
        <li>{name}</li>
        <li>{url}</li>
        <li>repo: {repo}</li>
        <li>{description}</li>
      </ul>
    )
  });
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>
          {children}
          {nodes}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
