import React from 'react';
import s from "./Button.module.scss";
import arrowIcon from "../../images/header/arrowIcon.svg";

type ButtonPropsType = {
    name?: string
    img: string
    rotate?: string
    color: string
    margin: string
}

export const Button: React.FC<ButtonPropsType> = ({name, img, rotate, color, margin}) => {
    return (
        <div className={s.btnNext} style={{borderColor: color, transform: `rotate(${rotate}deg)`, margin: margin}}>
            {name && <span>{name}</span>}
            <img src={img} className={name ? s.marImg : ''}/>
        </div>
    );
};

