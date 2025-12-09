"use client"

import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Scrollbar = () => {

    return(
        <div className="col-lg-12">
            <div className="header-menu">
                <ul className="smothscroll">
                    <li><AnchorLink href='#home'><i className="bi bi-arrow-up text-white fs-4"></i></AnchorLink></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Scrollbar;
