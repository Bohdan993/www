import React from "react"
import Sidebar from "../Sidebar/Sidebar"

const Layout = ({children}) => {
  return (
    <div className="global-wrapper">
      <Sidebar/>
      <main>{children}</main>
    </div>
  )
}

export default Layout
