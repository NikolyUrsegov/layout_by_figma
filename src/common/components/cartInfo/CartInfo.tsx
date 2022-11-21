import React from 'react';
import s from './CartInfo.module.scss';

type CartInfoPropsType = {
    title: string
    description: string
    img: string
}

export const CartInfo: React.FC<CartInfoPropsType> = ({title, description, img}) => {
    return (
        <div className={s.block}>
            <div className={s.title}>
                <div className={s.big}>
                    <span>{title}</span>
                </div>
                <div className={s.small}>
                    <span>{description}</span>
                </div>
            </div>
            <img src={img}/>
        </div>
    );
};
