import React from "react"
import MobileMenu from "../MobileMenu/MobileMenu"
import Sidebar from "../Sidebar/Sidebar"


const Layout = ({children, visible, isMobile, show, setShow}) => {
  return (
    <div className="global-wrapper">
      <Sidebar visible={visible} isMobile={isMobile}/>
      <MobileMenu isMobile={isMobile} show={show} setShow={setShow}/>
      <main>{children}</main>
    </div>
  )
}

export default Layout
