import React from 'react';
import {NavLink} from 'react-router-dom'
import cl from './nav.module.css';

export function Navbar() {
return(
    <div>
        <nav className={cl.menu}>
            <span className={cl.hr}></span>
            <ul className={cl.dFlex}>
                <li className="menu__item active"><NavLink to='/login'>логинизация</NavLink></li>
                {/*<li className="menu__item"><NavLink to='/registration'>регистрация </NavLink></li>*/}
                <li className="menu__item"><NavLink to='/profile'>профайл</NavLink></li>
                <li className="menu__item"><NavLink to='/testPage'>тестовая - отобразить/продемонстрировать все SuperКомпоненты</NavLink></li>
                {/*<li className="menu__item"><NavLink to='/createPassword'>ввод нового пароля</NavLink></li>*/}
                {/*<li className="menu__item"><NavLink to='/recoveryPassword'>восстановление пароля</NavLink></li>*/}
            </ul>
        </nav>
    </div>
)
}