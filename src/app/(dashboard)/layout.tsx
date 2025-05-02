import React, { ReactNode } from "react";


function Layout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen container mx-auto px-4">{children}</div>;
}

export default Layout;
