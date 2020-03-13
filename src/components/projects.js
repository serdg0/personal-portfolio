import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Fade from 'react-reveal/Fade';
import Tags from './tags';
import Github from '../../static/github.png';
import Live from '../../static/icons8-youtube-live-48.png';
import BackgroundImageSection from './backgrounds';
import { motion } from 'framer-motion';
import { OutboundLink } from "gatsby-plugin-google-analytics";

const Projects = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allProject {
          edges {
            node {
              id
              name
              url
              repo
              build
              description
              imgName
            }
          }
        }
      }
  `);
  const hover = {
    scale: [1, 1.5, 1.5, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  }
  const tap = {
    scale: '0.8'
  }
  const { allProject: { edges } } = data;
  const cards = edges.map(node => {
    const { node: { name, url, id, description, repo, build, imgName } } = node;
    return (
      <Fade key={id} bottom>
        <div className="card mb-4 project h-50">
          <div className="row no-gutters">
            <div className="col-md-4">
              <BackgroundImageSection imgName={imgName} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title main-color">{name}</h5>
                <p className="card-text text-color">{description}</p>
                <div className="card-text"><Tags build={build} /></div>
                <OutboundLink href={url} target="_blank" rel="noopener noreferrer" className="mr-2"><motion.img whileTap={tap} whileHover={hover} src={Live} alt="" /></OutboundLink>
                <OutboundLink href={repo} target="_blank" rel="noopener noreferrer"><motion.img whileTap={tap} whileHover={hover} src={Github} alt="" /></OutboundLink>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    )
  });

    return (
        <div>
            {cards}
        </div>
    )
}

export default Projects;