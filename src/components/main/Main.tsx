import React from 'react';
import s from './Main.module.scss'
import conStyle from '../../common/styles/Container.module.scss'
import logo from '../../common/images/header/logo.svg'
import img from '../../common/images/main/hockeyPlayer.svg'

export const Main = () => {
    return (
        <div className={s.block}>
            <div className={conStyle.container}>
                <div className={s.container}>
                    <div className={s.title}>
                        <div className={s.big}>
                            <span>Подберем Вашу идеальную клюшку</span>
                        </div>
                        <div className={s.small}>
                            <span>Пройдите тест и узнайте какая клюшкам подойдет именно вам</span>
                        </div>
                    </div>
                    <div>
                        <img src={logo}/>
                    </div>
                    <div className={s.blurRed}></div>
                    <div className={s.blur}></div>
                    <div className={s.imgBlock}>
                        <div className={s.imgContainer}>
                            <img src={img} />
                            <div className={s.btn}>
                                <span>Пройти тест</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

