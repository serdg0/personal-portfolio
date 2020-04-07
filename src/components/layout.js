import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Projects from './projects'
import Nav from './nav'
import Cover from './cover';
import Contact from './contact';
import "./layout.scss";
import SubHeader from "./subheader";
import Sidebar from './sidebar';
import Arrow from './upArrow';

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
      <Sidebar />
      <Arrow />
      <div className="container">
        <main title="cover">
          <Cover children={children} title={title} description={description} />
          <SubHeader title="portfolio" />
          <Projects />
        </main>
        <footer>
          <SubHeader title="contact" />
          <Contact />
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
