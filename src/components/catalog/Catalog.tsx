import React from 'react';
import s from './Catalog.module.scss'
import Marquee from "react-fast-marquee";
import conStyle from '../../common/styles/Container.module.scss'
import {Button} from "../../common/components/button/Button";
import arrowIcon from '../../common/images/header/arrowIcon.svg'
import cartImg from '../../common/images/catolog/hockeyStick.svg'
import {CartProduct} from "../../common/components/cardProduct/CartProduct";

export const Catalog = () => {
    return (
        <div className={s.block}>
            <div className={conStyle.container}>
                <div className={s.container}>
                    <div className={s.titleBlock}>
                        <h1>Выбор наших клиентов</h1>
                        <div className={s.btnBlock}>
                            <Button img={arrowIcon} color={'rgb(188, 188, 188)'} margin={'0'} rotate={'-180'}/>
                            <Button img={arrowIcon} color={'#BCBCBC'} margin={'0'} rotate={'0'}/>
                        </div>
                    </div>
                    <div className={s.catalog}>
                        <CartProduct img={cartImg} title={'Хоккейная клюшка Заряд Т100'} sale={'14 690 ₽'}/>
                        <CartProduct img={cartImg} title={'Хоккейная клюшка Заряд Т100'} sale={'14 690 ₽'}/>
                        <CartProduct img={cartImg} title={'Хоккейная клюшка Заряд Т100'} sale={'14 690 ₽'}/>
                        <CartProduct img={cartImg} title={'Хоккейная клюшка Заряд Т100'} sale={'14 690 ₽'}/>
                    </div>
                </div>
            </div>
            <div className={s.stripesBlock}>
                <div className={s.stripesContainer}>
                    <div className={s.stripesWhite}>
                        <Marquee gradient={false} direction={'left'} className={s.marquee}>
                            <span>клюшки</span>
                            <span>одежда</span>
                            <span>клюшки</span>
                            <span>аксессуары</span>
                            <span>одежда</span>
                        </Marquee>
                    </div>
                    <div className={s.stripesBlue}>
                        <Marquee gradient={false} direction={'right'}>
                            <span>Клюшки для маленьких чемпионов</span>
                            <span>Клюшки для маленьких чемпионов</span>
                            <span>Клюшки для маленьких чемпионов</span>
                            <span>Уникальная клюшка с твоим именем</span>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

