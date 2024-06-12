import { Button } from "@mui/material";
import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsTelephoneInbound } from "react-icons/bs";
import { TbSettings } from "react-icons/tb";
import speedometr from "../../assets/images/speedometr.svg";
import line from "../../assets/images/line.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__wrapper__top">
            <img className="footer__line" src={line} alt="" />
            <div className="footer__content">
              <div className="footer__content__top">
                <div className="footer__top__left">
                  <div className="footer__left__text">
                    <p>АВТОРУСЬ TANK Лосиный Остров</p>
                    <span>Официальный дилер</span>
                  </div>
                  <a href="#">
                    <SlLocationPin />
                    Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
                  </a>
                </div>
                <div className="footer__top__right">
                  <div className="footer__right__top">
                    <div className="footer__right__text">
                      <span>+7 (999) 999-99-99</span>
                      <a href="#">Мы на связи</a>
                    </div>
                    <Button variant="contained">
                      <BsTelephoneInbound />
                      Заказать звонок
                    </Button>
                  </div>
                  <ul className="footer__right__bottom">
                    <li>
                      <TbSettings />
                      Записаться на сервис
                    </li>
                    <li>
                      <img src={speedometr} alt="" />
                      Тест-драйв
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer__content__bottom">
                <span>Официальный дилер</span>
                <p>
                  ООО А АВТОРУСЬ МЫТИЩИ | ОГРН - 1147746695161, ИНН - 7728881903
                </p>
              </div>
            </div>
            <img className="footer__line" src={line} alt="" />
          </div>
          <div className="footer__wrapper__bottom">
            <span>© 2024, АВТОРУСЬ ТАНК</span>
            <div className="footer__wrapper__bottom__right">
              <span>Правовая информация</span>
              <span>Условия акции</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
