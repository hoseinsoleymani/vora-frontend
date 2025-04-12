import React, { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f4f4]">
      {children}
    </div>
  );
}

export default Layout