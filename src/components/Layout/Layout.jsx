import Header from 'components/Header/Header'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
      <>
      <Header />
      <Suspense fallback={'Load...'}>
          <Outlet />
      </Suspense>
      </>
  )
}

export default Layout