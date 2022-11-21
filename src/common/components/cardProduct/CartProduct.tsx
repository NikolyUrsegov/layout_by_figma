import React from 'react';
import s from './CartProduct.module.scss'
import {Button} from "../button/Button";
import statisticsIcon from '../../images/nav/statisticsIcon.svg'
import arrowIcon from '../../images/header/arrowIcon.svg'

type CartProductPropsType = {
    img: string
    title: string
    sale: string
}

export const CartProduct: React.FC<CartProductPropsType> = ({img, sale, title}) => {
    return (
        <div className={s.block}>
            <div className={s.cartImg}>
                <img src={img}/>
            </div>
            <div className={s.info}>
                <div className={s.title}>
                    <span>{title}</span>
                </div>
                <div className={s.sale}>
                    <span>{sale}</span>
                </div>
            </div>
            <div className={s.buttonBlock}>
                <Button img={statisticsIcon} color={'#BCBCBC'} margin={'0'} rotate={'-180'}/>
                <Button img={arrowIcon} color={'#333333'} margin={'0'} name={'Подробнее'}/>
            </div>
        </div>
    );
};

