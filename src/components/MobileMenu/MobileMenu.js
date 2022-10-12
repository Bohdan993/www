import React, {useEffect, useState} from 'react';
import { navigation } from "../../utils/utils";
import MenuIcon from "./MenuIcon";
import "./MobileMenu.sass";


const MobileMenu = ({isMobile}) => {
    const [show, setShow] = useState(false);
    const [active, setActive] = useState('Products')

    const clickHandlerShow = (e) => {
        setShow(true);
    }

    const clickHandlerClose = (e) => {
        setShow(false);
    }

    const clickHandleChangeActive = (title) => {
        setActive(title);
    }

    useEffect(()=>{
        setShow(false)
    }, [isMobile])

    return (
        <div className='mobile-menu__container'>
            {(isMobile && !show) && (
                <>
                    <div className="mobile-menu__header">
                        <a href="#Intro" crossOrigin="true" className="mobile-menu__logo">
                            <img src="/logo/logo.svg" alt="Svistel" className="mobile-menu__logo-img" />
                        </a>
                        <div className="menu-icon" onClick={clickHandlerShow}>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </>
            )}

            {isMobile && show ? (
                <nav className="mobile-menu">
                {/* <div className="sidebar__logo-box" data-menuanchor="Intro">

                </div> */}
                <ul  className="mobile-menu__list" id="mobile-menu__list">
                    {navigation?.map(
                    (item, index) =>
                        index !== 0 && (
                        <li
                            key={index}
                            className={`mobile-menu__item ${active === item.title ? 'active' : ''}`}
                            data-menuanchor={item.title}
                        >
                            <a
                            href={`#${item.title}`}
                            crossOrigin="true"
                            className={`mobile-menu__link mobile-menu__link--${index}`}
                            onClick={(e) => {clickHandlerClose(e); clickHandleChangeActive(item.title);}}
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