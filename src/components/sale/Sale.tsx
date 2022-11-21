import React from 'react';
import s from './Sale.module.scss'
import lightning from '../../common/images/sale/star.svg'
import sale from '../../common/images/sale/sale.svg'
import img from '../../common/images/sale/img.svg'

export const Sale = () => {
    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.info}>
                    <div className={s.description}>
                        <div className={s.txtIcon}>
                            <span>Получи</span>
                            <div className={s.blur}>
                                <img src={lightning}/>
                            </div>
                        </div>
                        <div className={s.txtIcon}>
                            <div className={s.blurRed}>
                                <img src={sale}/>
                            </div>
                            <span>скидку</span>
                            <b>500 ₽</b>
                        </div>
                        <div className={s.txtIcon}>
                            <span>за подписку</span>
                        </div>
                        <div className={s.subTitle}>
                            <span >Никакого спама и рекламы, только полезная информация, скидки и персональные предложения</span>
                        </div>
                        <div className={s.eMailInp}>
                            <input placeholder={'Ваш Email'}/>
                        </div>
                    </div>
                    <div className={s.btn}>
                        <span>Подписаться</span>
                    </div>
                </div>
                <div className={s.imgBlock}>
                    <img src={img}/>
                </div>
            </div>
        </div>
    );
};
