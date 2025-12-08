"use client"

import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-image">
                                <a href="/home">
                                    <img src="/images/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-menu">
                                <ul className="d-flex " >
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/novalakbar38/"><i className="fa fa-instagram"></i></a></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/maulana-haekal/"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/lebefriedlich"><i className="fa fa-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer-sub">
                                <p><i className="fa fa-copyright"></i> <span> 2025  All rights reserved</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;