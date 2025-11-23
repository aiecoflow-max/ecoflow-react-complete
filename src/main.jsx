import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tool from './pages/Tool'
import Layout from './components/Layout'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tool" element={<Tool />} />
          <Route path="/en" element={<Home />} />
          <Route path="/ko" element={<Home lang="ko" />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
)