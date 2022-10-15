import React, {useEffect, useState} from 'react';
import { navigation } from "../../utils/utils";
import MenuIcon from "./MenuIcon";
import "./MobileMenu.sass";


const MobileMenu = ({isMobile, show, setShow}) => {

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


    useEffect(()=>{
        if(show) document.body.classList.add('mobile-menu-open');
        if(!show) document.body.classList.remove('mobile-menu-open');
    }, [show])

    return (
        <div className='mobile-menu__container'>
            {/* {(isMobile && !show) && (
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
            )} */}

            {isMobile && show ? (
                <div className="mobile-menu mobile-menu_inner">
                    <div className="mobile-menu__header_inner">
                        <a href="#Intro" crossOrigin="true" className="mobile-menu__logo_inner" onClick={(e) => {clickHandlerClose(); clickHandleChangeActive('Intro')}}>
                            <img src="/logo/logo.svg" alt="Svistel" className="mobile-menu__logo-img_inner" />
                        </a>
                        <h2 className="title">Menu</h2>
                        <div className="menu-icon-close" onClick={clickHandlerClose}>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <nav className="mobile-menu__nav">
                    <ul  className="mobile-menu__list" id="mobile-menu__list">
                        {navigation?.map(
                        (item, index) => {
                            return (index !== 0) && (index !== navigation.length - 1) && (
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
                        }

                        )}
                    </ul>
                </nav>
                <div className="mobile-menu_cta">
                    <p>Contact Us</p>
                    <a href="mailto:info@svistel.in">
                        info@svistel.in
                    </a>
                </div>
            </div>
            ) : (null)}
        </div>
    );
};

export default MobileMenu;