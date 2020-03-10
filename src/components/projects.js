import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Tags from './tags';

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
            }
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
                <li><Tags build={build} /></li>
            </ul>
        )
    });

    return (
        <div>
            {nodes}
        </div>
    )
}

export default Projects;