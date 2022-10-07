import React from "react"
import Sidebar from "../Sidebar/Sidebar"

const Layout = ({children, visible}) => {
  return (
    <div className="global-wrapper">
      <Sidebar visible={visible}/>
      <main>{children}</main>
    </div>
  )
}

export default Layout
