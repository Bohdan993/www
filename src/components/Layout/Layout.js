import React from "react"
import MobileMenu from "../MobileMenu/MobileMenu"
import Sidebar from "../Sidebar/Sidebar"


const Layout = ({children, visible, isMobile}) => {
  return (
    <div className="global-wrapper">
      <Sidebar visible={visible} isMobile={isMobile}/>
      <MobileMenu isMobile={isMobile}/>
      <main>{children}</main>
    </div>
  )
}

export default Layout
