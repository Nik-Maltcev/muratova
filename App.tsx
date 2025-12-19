import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Publications } from './pages/Publications';
import { Articles } from './pages/Articles';
import { Media } from './pages/Media';
import { Contacts } from './pages/Contacts';
import { Events } from './pages/Events';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;