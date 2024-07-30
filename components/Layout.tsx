'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <SessionProvider >
      <Sidebar />
      <Navbar />
    </SessionProvider>
  )
}

export default Layout
