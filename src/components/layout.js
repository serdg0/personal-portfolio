import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Typical from 'react-typical';
import Projects from './projects'
import Nav from './nav'
import Contact from './contact';
import "./layout.css";
import PortfolioHeader from "./portfoliotitle";

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
          <PortfolioHeader />
          <Projects />
        </main>
        <Contact />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
