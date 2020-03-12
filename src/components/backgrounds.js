import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';

const BackgroundImageSection = ({ imgName }) => {
	const data = useStaticQuery(graphql`
	query backgroundImage {
		allFile(filter: {extension: {regex: "/(png)/"}}) {
			edges {
				node {
					base
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
	`);
	
	const styleBg = {
		width: '100%',
		height: '100%',
		maxHeight: 'auto',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
	}
	const { allFile: { edges } } = data;
	const myBackground = edges.filter(bg => {
		const { node: { base } } = bg;
		return base === imgName;
	})
	const { childImageSharp: { fluid } } = myBackground[0].node;
	return (
		<BackgroundImage
			fluid={fluid}
			style={styleBg}
		>
        </BackgroundImage>
	)
}

export default BackgroundImageSection;