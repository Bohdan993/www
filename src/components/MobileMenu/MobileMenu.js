import React, {useState} from 'react';
import { navigation } from "../../utils/utils";
import MenuIcon from "./MenuIcon";
import "./MobileMenu.sass";


const MobileMenu = ({isMobile}) => {
    const [show, setShow] = useState(false);

    return (
        <div className='mobile-menu__container'>
            {(isMobile && show) && (
                <>
                    <div className="mobile-menu__header">
                        <a href="#Intro" crossOrigin="true">
                            <img src="/logo/logo.svg" alt="Svistel" className="sidebar__logo" />
                        </a>
                    </div>
                </>
            )}

            {isMobile && show ? (
                <nav className="mobile-menu">
                {/* <div className="sidebar__logo-box" data-menuanchor="Intro">

                </div> */}
                <ul id="mobile-menu" className="mobile-menu">
                    {navigation?.map(
                    (item, index) =>
                        index !== 0 && (
                        <li
                            key={index}
                            className={`mobile-menu__item ${index === 1 ? 'active' : ''}`}
                            data-menuanchor={item.title}
                        >
                            <a
                            href={`#${item.title}`}
                            crossOrigin="true"
                            className={`mobile-menu__link mobile-menu__link--${index}`}
                            >
                            <MenuIcon icon={item.title} />
                            <p>{item.name}</p>
                            </a>
                        </li>
                        )
                    )}
                </ul>
            </nav>
            ) : (null)}
        </div>
    );
};

export default MobileMenu;