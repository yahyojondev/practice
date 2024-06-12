import React, { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import tanklogo from "../../assets/images/tanklogo.svg";
import { IoSettingsOutline } from "react-icons/io5";
import speedometr from "../../assets/images/speedometr.svg";
import { Button } from "@mui/material";
import { LuPhoneIncoming } from "react-icons/lu";
import { FaPhoneVolume } from "react-icons/fa6";
import { CgMenuLeftAlt } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [fix, setFix] = useState(false);
  const [see, setSee] = useState(false);

  function setFixed() {
    if (window.scrollY >= 10) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <>
      <div className={fix ? "header fixed" : "header"}>
        <div className="container">
          <div className="header__wrapper">
            <img src={tanklogo} alt="" className="header__logo" />
            <div className="navbar__wrapper">
              <div className="navbar__wrapper__top">
                <div className="navbar__wrapper__top__left">
                  <GrLocation />
                  <NavLink>
                    Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
                  </NavLink>
                </div>
                <ul className="navbar__wrapper__top__right">
                  <li>
                    <IoSettingsOutline />
                    Записаться на сервис
                  </li>
                  <li>
                    <img src={speedometr} alt="" />
                    Тест-драйв
                  </li>
                </ul>
              </div>
              <span className="line"></span>
              <div className="navbar__wrapper__bottom">
                <div className="navbar__desktop__left">
                  <p>АВТОРУСЬ TANK Лосиный Остров</p>
                  <span>Официальный дилер</span>
                </div>
                <div className="navbar__desktop__right">
                  <FaPhoneVolume />
                  <button value={see} onClick={(e) => setSee((p) => !p)}>
                    <CgMenuLeftAlt />
                  </button>
                </div>
                <div className="navbar__wrapper__bottom__left">
                  <p>АВТОРУСЬ TANK</p>
                  <span className="horizontal"></span>
                  <span>Официальный дилер</span>
                </div>
                <div className="navbar__wrapper__bottom__right">
                  <div className="navbar__right__text__wrapper">
                    <p>+7 (999) 999-99-99</p>
                    <NavLink>
                      <span></span>Мы на связи
                    </NavLink>
                  </div>
                  <Button variant="contained">
                    <LuPhoneIncoming />
                    Заказать звонок
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {see ? (
          <div className="header__burger">
            <button
              value={see}
              onClick={(e) => setSee((p) => !p)}
              className="header__close"
            >
              <AiOutlineClose className="header__burger__svg" />
            </button>
            <ul>
              <li>
                <IoSettingsOutline />
                Записаться на сервис
              </li>
              <li>
                <img src={speedometr} alt="" />
                Тест-драйв
              </li>
              <li>+7 (999) 999-99-99</li>
              <li>
                <Button variant="contained">
                  <LuPhoneIncoming />
                  Заказать звонок
                </Button>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Header;
