import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Projects from './projects'
import Nav from './nav'
import Cover from './cover';
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
        <main title="cover">
          <Cover children={children} title={title} description={description} />
          <PortfolioHeader title="portfolio" />
          <Projects />
        </main>
        <Contact title="contact" />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
