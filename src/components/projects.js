import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Fade from 'react-reveal/Fade';
import Tags from './tags';
import Display from './imageDisplay';
import Github from '../../static/icons8-github-50.png';
import Live from '../../static/icons8-youtube-live-48.png';

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
/*
  const height = window.innerHeight * 0.75;
  const size = {
    height,
  } */
  const { allProject: { edges } } = data;
  
  const cards = edges.map(node => {
    const { node: { name, url, id, description, repo, build, imgName } } = node;
    return (
      <Fade bottom>
        <div key={id} className="card mb-3 project ">
          <div className="row no-gutters">
            <div className="col-md-4">
              <Display path={imgName} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title main-color">{name}</h5>
                <p className="card-text text-color">{description}</p>
                <p className="card-text"><Tags build={build} /></p>
                <a href={url} target="_blank" className="mr-2"><img src={Live} /></a>
                <a href={repo} target="_blank"><img src={Github} /></a>
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