import React, { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-48 py-20">
      {children}
    </div>
  );
}

export default Layout