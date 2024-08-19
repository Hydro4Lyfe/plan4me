'use client'

import { SessionProvider } from 'next-auth/react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const NavLayout = () => {
  return (
    <SessionProvider >
      <Sidebar />
      <Navbar />
    </SessionProvider>
  )
}

export default NavLayout
