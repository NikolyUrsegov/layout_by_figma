import React from 'react';
import s from './Nav.module.scss'
import conStyle from '../../common/styles/Container.module.scss'
import logo from '../../common/images/nav/navLogo.svg'
import searchIcon from '../../common/images/nav/searchIcon.svg'
import phoneIcon from '../../common/images/nav/phoneIcon.svg'
import profileIcon from '../../common/images/nav/profileIcon.svg'
import statisticsIcon from '../../common/images/nav/statisticsIcon.svg'
import basketIcon from '../../common/images/nav/basketIcon.svg'

export const Nav = () => {
    return (
        <div className={conStyle.container}>
            <div className={s.block}>
                <div className={s.languageBlock}>
                    <div className={s.logo}>
                        <img src={logo}/>
                    </div>
                    <div className={s.language}>
                        <span><span>Ru</span><span>/ En</span></span>
                    </div>
                </div>
                <div className={s.navBlock}>
                    <nav>
                        <a href={'/'} className={s.active}>Клюшки</a>
                        <a href={'/'}>Одежда</a>
                        <a href={'/'}>Аксессуары</a>
                        <a href={'/'}>Кастомизация</a>
                        <a href={'/'}>Отследить заказ</a>
                    </nav>
                    <div className={s.btnBlock}>
                        <img src={searchIcon} alt=""/>
                        <img src={phoneIcon} alt=""/>
                        <img src={statisticsIcon} alt=""/>
                        <img src={profileIcon} alt=""/>
                        <div className={s.basket}>
                            <img src={basketIcon}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

