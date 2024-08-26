'use client'
import Link from "next/link";
import React, { useState, useEffect } from 'react'

const SubMenu = ({ item }) => {
    const [subnav, setSubNav] = useState(false)
    const [isHovered, setHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth >= 768.98);

    const checkScreenSize = () => {
        setIsMobile(window.innerWidth >= 768.98);
    };

    const showSubNav = () => setSubNav(!subnav)

    useEffect(() => {
        // Add event listener to handle screen resizing
        window.addEventListener("resize", checkScreenSize);
    
        // Cleanup the event listener
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    if (item.subNav) {
        return (
            <li className={isHovered & isMobile ? "hover_nav" : ""} onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}}>
                <Link href={item.path} className="main-nav__item item--toggle">
                    <span>{item.title}</span>
                    <span>{item.icon}</span>
                </Link>
                <ul className="main-nav__childs">
                    {isHovered && item.subNav.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </li>
        )
    } else {
        return (
            <li className={isHovered & isMobile ? "hover_nav" : ""} onMouseEnter={() => {setHovered(true)}} onMouseLeave={() => {setHovered(false)}}>
                <Link href={item.path} className="main-nav__item">
                    <span>{item.title}</span>
                </Link>
            </li>
        )
    }
}

export default SubMenu