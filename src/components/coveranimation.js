import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

const Slides = () => {
  const data = useStaticQuery(graphql`
    query Icons {
      allFile(filter: {relativeDirectory: {eq: "icons"}}) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const { allFile: { edges } } = data;
  const icons = edges.map(icon => {
    const { node: { childImageSharp: { id, fluid } } } = icon;
    return <Img key={id} fluid={fluid} className="mr-2" style={{height: '50px', width: '50px'}} />
  })

  return (
    <div className="d-flex justify-content-end mt-5 mb-5">
      {icons}
    </div>
  );
};

export default Slides;