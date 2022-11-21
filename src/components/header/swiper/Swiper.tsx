import React from 'react';
import s from './Swiper.module.scss'
import mainImg from '../../../common/images/header/image.svg'
import arrowIcon from '../../../common/images/header/arrowIcon.svg'
import imgSmallR from '../../../common/images/header/bannerR.svg'
import imgSmallL from '../../../common/images/header/bannerL.svg'
import circleText from '../../../common/images/header/circleText.svg'
import startIcon from '../../../common/images/header/startIcon.svg'
import {Button} from "../../../common/components/button/Button";

export const Swiper = () => {
    const circleText1 = 'отзыв константина константин смотреть'

    return (
        <div className={s.block}>
            <div className={s.item}>
                <img src={imgSmallL}/>
            </div>
            <div className={s.item}>
                <Button img={arrowIcon} color={'rgba(125, 125, 125, 0.8)'} rotate={'180'} margin={'40px'}/>
                <img src={mainImg}/>
                <Button img={arrowIcon} color={'rgba(125, 125, 125, 0.8)'} rotate={'0'} margin={'40px'}/>
                <div className={s.infoBlock}>
                    <div className={s.info}>
                        <div className={s.bigText}>
                            <span>Константин Константинович</span>
                        </div>
                        <div className={s.smallText}>
                            <span>Крутой хоккеист такой-то команды</span>
                        </div>
                    </div>
                    <div className={s.circle} style={{}}>
                        <img className={s.textCircle} src={circleText}/>
                        <img src={startIcon}/>
                    </div>
                </div>
            </div>
            <div className={s.blurBig}></div>
            <div className={s.blurSmall}></div>
            <div className={s.item}>
                <img src={imgSmallR}/>
            </div>
            <div className={s.catalog}>
                <span>В каталог</span>
            </div>

        </div>
    );
};

