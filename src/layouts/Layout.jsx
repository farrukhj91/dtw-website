// src/layouts/Layout.jsx
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <div className="bg-bg-primary text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </div>
  )
}
