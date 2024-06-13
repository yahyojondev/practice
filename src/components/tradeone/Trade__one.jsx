import React from "react";
import danger from "../../assets/images/danger.svg";
import { Button } from "@mui/material";
import { FaChevronRight } from "react-icons/fa6";
import car1 from "../../assets/images/tradeone.png";
import { tradecardproduct, tradeonecar } from "../../static/router";

const Trade = () => {
  const tradeItem = tradecardproduct?.map((el) => (
    <div key={el.id} className="tarde__card">
      <img src={el.img} alt="" />
      <p>{el.title}</p>
    </div>
  ));

  const carItem = tradeonecar?.map((el) => (
    <img key={el.id} src={el.img} alt="car" />
  ));

  return (
    <div className="trade  one__trade">
      <div className="container">
        <div className="trade__wrapper">
          <div className="trade__wrapper__top trade__one__top">
            <div className="trade__top__left">
              <div className="trade__top__left__top__text">
                <a>Только в АВТОРУСЬ!</a>
                <p>TANK 500</p>
                <span>Выгода до 700 000 ₽</span>
                <div className="danger">
                  <img src={danger} alt="danger" />
                  <a>Ограниченное предложение!</a>
                  <img src={danger} alt="" />
                </div>
              </div>
              <div className="button__wrapper">
                <Button className="danger__btn" variant="contained">
                  Узнать стоимость по акции
                  <FaChevronRight />
                </Button>
                <Button variant="outlined">
                  Тест-драйв
                  <FaChevronRight />
                </Button>
                <Button variant="outlined">
                  Рассчитать кредит
                  <FaChevronRight />
                </Button>
              </div>
            </div>
            <div className="trade__top__right trade__left">
              <img src={car1} alt="" />
              <form className="trade__input__wrapper">
                <span className="trade__right__select-1"></span>
                <span className="trade__right__select-2"></span>
                <span className="trade__right__select-3"></span>
                <span className="trade__right__select-4"></span>
                <span className="trade__right__select-5"></span>
              </form>
            </div>
          </div>
          <div className="trade__wrapper__bottom">
            <div className="tarde__bottom__cards">{tradeItem}</div>
            <div className="trade__images">{carItem}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trade;
