import React from 'react';
import s from './Header.module.scss'
import logo from '../../common/images/header/logo.svg'
import {Swiper} from "./swiper/Swiper";

export const Header = () => {
    return (
        <div className={s.block}>
            <div className={s.logo}>
                <img src={logo}/>
            </div>
            <Swiper/>
        </div>
    );
};

