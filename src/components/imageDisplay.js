import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby";

const Display = ({ path }) => {
    const data = useStaticQuery(graphql`
    query Images {
      allFile(filter: {extension: {regex: "/(png)/"}}) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
    `);
    const { allFile: { edges } } = data;
    const myImg = edges.filter(img => {
      const { node: { base } } = img;
      return base === path;
    })
    const { childImageSharp: { fluid } } = myImg[0].node;
    return <Img fluid={fluid} />
}

export default Display;
