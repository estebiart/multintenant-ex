import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tenant1Component from './tenants/tenant1/tenant1Component';
import Tenant2Component from './tenants/tenant2/tenant2Component';
// import Tenant1About from './tenants/tenant1/Tenant1About';
// import Tenant2About from './tenants/tenant2/Tenant2About';
// import Tenant1Contact from './tenants/tenant1/Tenant1Contact';
// import Tenant2Contact from './tenants/tenant2/Tenant2Contact';

function App() {
  const subdomain = window.location.hostname.split('.')[0];
  
  return (
    <Router>
      <Routes>
        {subdomain === 'tenant1' && (
          <>
            <Route path="/" element={<Tenant1Component />} />
            {/* <Route path="/about" element={<Tenant1About />} />
            <Route path="/contact" element={<Tenant1Contact />} /> */}
          </>
        )}
        {subdomain === 'tenant2' && (
          <>
            <Route path="/" element={<Tenant2Component />} />
            {/* <Route path="/about" element={<Tenant2About />} />
            <Route path="/contact" element={<Tenant2Contact />} /> */}
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
