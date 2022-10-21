import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Meta = ({
  title = 'Welcome to Grid Manager app',
  description = 'We provide you a Single Page App (SPA)',
  keywords = 'React ,SPA',
}) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Ajay Ranga" />
      </Helmet>
    </HelmetProvider>
  );
};

export default Meta;
