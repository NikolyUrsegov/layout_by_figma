import React from 'react';
import s from './About.module.scss'
import {CartInfo} from "../../common/components/cartInfo/CartInfo";
import img1 from '../../common/images/about/image.svg'
import img2 from '../../common/images/about/image2.svg'

export const About = () => {

    return (
        <div className={s.block}>
            <div className={s.container}>
                <div className={s.info}>
                    <div className={s.title}>
                        <div className={s.big}>
                            <span>О бренде ЗаряД</span>
                        </div>
                        <div className={s.small}>
                            <span>
                                `Первый завод в россии по производству полного ассортимента высококачественных
                                хоккейных клюшек для всех возрастных категорий и уровней игры`
                            </span>
                        </div>
                    </div>
                    <div className={s.btn}>
                        <span>Подробнее о компании</span>
                    </div>
                </div>
                <div className={s.cartsInfo}>
                    <CartInfo title={'Космические технологии'}
                              description={
                                  `Клюшки заряд специально спроектированы для точной игры в пас, первого длинного паса,
                                   максимального контроля шайбы и остроатакующей комбинационной игры`
                              }
                              img={img1}
                    />
                    <CartInfo title={'Российский стиль'}
                              description={
                                  `Первый завод в россии по производству полного ассортимента высококачественных
                                хоккейных клюшек для всех возрастных категорий и уровней игры`
                              }
                              img={img2}
                    />
                </div>

            </div>
        </div>
    );
};
