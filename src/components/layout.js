/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="antialiased flex flex-col font-sans min-h-screen text-gray-600">
      <Header />
      <main id="main" className="flex-1 mx-auto max-w-4xl px-4 pb-6 w-full">
        {children}
      </main>
      <footer className="bg-orange-600 text-white text-center">
        <div className="mx-auto max-w-4xl p-4 w-full">
          For all wedding related enquires, please contact us via{' '}
          <a
            className="font-bold hover:text-orange-200"
            href="mailto:hello@fernandluke.com?subject=%23flukefest"
          >
            email
          </a>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
