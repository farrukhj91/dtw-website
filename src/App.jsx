// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout    from './layouts/Layout'
import Home      from './pages/Home'
import Services  from './pages/Services'
import Platforms from './pages/Platforms'
import Portfolio from './pages/Portfolio'
import About     from './pages/About'
import Contact   from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"          element={<Home />} />
          <Route path="/services"  element={<Services />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about"     element={<About />} />
          <Route path="/contact"   element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
