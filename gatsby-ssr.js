/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';

// Add hidden form to HTML body for Netlify Forms detection
// This ensures Netlify can detect the form during build
export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <form
      key="netlify-form"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      hidden>
      <input type="hidden" name="form-name" value="contact" />
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message" />
    </form>,
  ]);
};
