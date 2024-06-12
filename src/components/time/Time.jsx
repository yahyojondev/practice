import React from "react";
import time from "../../assets/images/time.png";
import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";
import { cardproduct } from "../../static/router";
import car1 from "../../assets/images/timecar1.png";
import car2 from "../../assets/images/timecar2.png";

const Time = () => {
  const cardItem = cardproduct?.map((el) => (
    <div key={el.id} className="time__card">
      <img src={el.img} alt="" />
      <div className="time__card__text">
        <p>{el.title}</p>
        <span>{el.text}</span>
      </div>
    </div>
  ));

  return (
    <div className="time">
      <div className="container">
        <div className="time__wrapper">
          <div className="time__wrapper__top">
            <p>Срок действия спецпредложения:</p>
            <img src={time} alt="" />
            <Button variant="contained">
              Узнать цену с выгодами <FaAngleRight />
            </Button>
          </div>
          <div className="time__wrapper__center">{cardItem}</div>
          <div className="time__wrapper__bottom">
            <div className="time__wrapper__bottom__title">
              <p>
                ЗАБРОНИРУЙТЕ Автомобиль СЕГОДНЯ И ПОЛУЧИТЕ ДОПОЛНИТЕЛЬНУЮ ВЫГОДУ
                100 000 ₽
              </p>
            </div>
            <div className="time__wrapper__bottom__content">
              <div className="time__bottom__img__text">
                <img src={car1} alt="car" />
                <p>TANK 300</p>
              </div>
              <div className="time__bottom__img__text">
                <img src={car2} alt="car" />
                <p>TANK 500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
