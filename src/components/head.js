import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

// https://www.gatsbyjs.com/docs/add-seo-component/

const Head = ({ title, description, image }) => {
  const { pathname } = useLocation();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl
            defaultImage: image
          }
        }
      }
    `,
  );

  const { defaultTitle, defaultDescription, siteUrl, defaultImage } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  // Structured data for better SEO
  const structuredData = {
    name: 'Shah Khan',
    jobTitle: 'Software Engineer',
    url: siteUrl,
    sameAs: [
      'https://github.com/Sherry112',
      'https://www.linkedin.com/in/shaheryar-khan-911417126',
    ],
    description: defaultDescription,
  };

  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
      <html lang="en" />

      {/* Basic Meta Tags */}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="author" content="Shah Khan" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={seo.url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content={defaultTitle} />

      {/* Google Verification */}
      <meta name="google-site-verification" content="qUoLZOI9JZoO1rpTkyFGEvEx6PyqLzFY6n7DLyOmeWA" />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
