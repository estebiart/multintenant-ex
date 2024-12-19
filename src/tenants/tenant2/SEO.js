// src/tenants/tenant1/SEO.js
import React from 'react';
import { Helmet } from 'react-helmet';

const Tenant2SEO = () => (
  <Helmet>
    <title>Tenant 2 - My App</title>
    <meta name="description" content="Description for Tenant 1" />
    <meta name="keywords" content="tenant1, example, myapp" />
    {/* Otros meta tags específicos */}
  </Helmet>
);

export default Tenant2SEO;
