import React from "react";
import "./Sidebar.sass";
import { navigation } from "../../utils/utils";
import SidebarIcon from "./SidebarIcon";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar__logo-box" data-menuanchor="Intro">
        <a href="#Intro" crossOrigin="true">
          <img src="/logo/logo.svg" alt="Svistel" className="sidebar__logo" />
        </a>
      </div>
      <ul id="menu" className="side-nav">
        {navigation?.map(
          (item, index) =>
            index !== 0 && (
              <li
                key={index}
                className="side-nav__item"
                data-menuanchor={item.title}
              >
                <a
                  href={`#${item.title}`}
                  crossOrigin="true"
                  className={`side-nav__link side-nav__link--${index}`}
                >
                  <SidebarIcon icon={item.title} />
                </a>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

export default Sidebar;
