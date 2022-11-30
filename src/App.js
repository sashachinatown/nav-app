import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {Blogs, Contact, Home, Layout, NoPage } from './pages/export';
import { createMemoryHistory } from 'history';

const App = () => {
  const history = createMemoryHistory();
  return (
    <Router location={history.location} navigator={history}>
      <ul>
        <li>
          <Link to="/layout">Layout</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className='page'>
        <Routes>
          <Route path="/layout" element={<Layout />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<NoPage />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
