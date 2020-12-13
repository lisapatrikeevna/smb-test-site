import React from 'react';
import cl from './header.module.css';
import logo from '../../image/logo.png';

export function Header() {
    return(
        <div className={cl.header}>
            <p>hw 16<br/>some text</p>
            <div className={cl.blockRight}>
                <div className={cl.contact}>
                    <a href="">7 (978) 000000000</a>
                    <a href="">+7 (3652) 000000000</a>
                </div>
                <img src={logo} alt=""/>
            </div>
        </div>
    )
}