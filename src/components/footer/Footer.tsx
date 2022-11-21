import React from 'react';
import conStyle from '../../common/styles/Container.module.scss'
import s from './Footer.module.scss'
import logo from '../../common/images/footer/logo.svg'
import tgIcon from '../../common/images/footer/tg.svg'
import vkIcon from '../../common/images/footer/vk.svg'
import miniLogo from '../../common/images/footer/vector.svg'

export const Footer = () => {
    return (
        <div className={s.block}>
            <div className={conStyle.container}>
                <div className={s.container}>
                    <div className={s.header}>
                        <img src={logo} alt="logo"/>
                        <div className={s.socialBlock}>
                            <a href={''}>
                                <img src={tgIcon} alt="tg"/>
                            </a>
                            <a href={''}>
                                <img src={vkIcon} alt="vk"/>
                            </a>
                        </div>
                    </div>
                    <div className={s.content}>
                        <div className={s.info}>
                            <div className={s.items}>
                                <div className={s.item}>
                                    <h3>Наименование</h3>
                                    <span>ООО «ЗаряД»</span>
                                </div>
                                <div className={s.item}>
                                    <h3>Юридический адрес</h3>
                                    <span>Республика Татарстан, г. Набережные Челны, ул. Альметьевский тракт, д. 6а</span>
                                </div>
                                <div className={s.group}>
                                    <div className={s.item}>
                                        <h3>Телефон</h3>
                                        <span>+7 (800) 511-93-90</span>
                                    </div>
                                    <div className={s.item}>
                                        <h3>Email</h3>
                                        <span>info@zaryad-hockey.ru</span>
                                    </div>
                                    <div className={s.item}>
                                        <h3>ИНН</h3>
                                        <span>1646040440</span>
                                    </div>
                                    <div className={s.item}>
                                        <h3>ОГРН</h3>
                                        <span>1151674001632</span>
                                    </div>
                                </div>
                            </div>
                            <div className={s.ps}>
                                <span>© 2017-2022 Заряд</span>
                                <span>Политика конфиденциальности</span>
                            </div>
                        </div>
                        <div className={s.groups}>
                            <div className={s.about}>
                                <h3>О бренде</h3>
                                <a>История бренда</a>
                                <a>Технологии производства</a>
                                <a>Производство</a>
                                <a>Контакты магазинов</a>
                            </div>
                            <div className={s.parts}>
                                <h3>Партнерам</h3>
                                <a>Как стать партнером</a>
                                <a>Как мы работаем</a>
                                <a>Информация о выборе контрагентов</a>
                            </div>
                            <div className={s.consumer}>
                                <h3>Покупателям</h3>
                                <div className={s.linkGroup}>
                                    <div>
                                        <a>Доставка и оплата</a>
                                        <a>Обмен и возврат</a>
                                        <a>Гарантия</a>
                                    </div>
                                    <div>
                                        <a>Бонусная программа</a>
                                        <a>Таблица размеров</a>
                                        <a>Подарочный сертификат</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.btn}>
                        <span>Связаться с нами</span>
                    </div>
                    <div className={s.img}>
                        <img src={miniLogo}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

