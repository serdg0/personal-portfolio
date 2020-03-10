/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Typical from 'react-typical';
import Projects from './projects'
import Nav from './nav'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  const { site: { siteMetadata: { title, description } } } = data;
  return (
    <>
      <Nav />
      <div className="container">
        <main>
          {children}
          <h1><Typical loop={1} steps={[title, 5000]} /></h1>
          <p>{description}</p>
          <Projects />
        </main>
        <footer id='contact'>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://twitter.com/thesergiod">Sergio Diaz</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
