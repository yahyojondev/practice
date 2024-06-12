import { Button } from "@mui/material";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import choose1 from "../../assets/images/choose1.svg";
import choose2 from "../../assets/images/choose2.svg";
import choosecar from "../../assets/images/choosecar.png";
import choosebottom from "../../assets/images/choosebottom.png";

const Choose = () => {
  return (
    <div className="choose">
      <div className="container">
        <div className="choose__wrapper">
          <div className="choose__wrapper__top">
            <p className="choose__title">ПОДБЕРИТЕ КОМПЛЕКТАЦИЮ</p>
            <form className="choose__form">
              <div className="choose__select">
                <span>Модель</span>
                <select name="" id="">
                  <option value="">hello</option>
                </select>
              </div>
              <div className="choose__select">
                <span>Комплектация</span>
                <select name="" id="">
                  <option value="">hello</option>
                </select>
              </div>
              <div className="choose__select">
                <span>Двигатель</span>
                <select name="" id="">
                  <option value="">hello</option>
                </select>
              </div>
            </form>
            <div className="choose__cards">
              <div className="choose__card">
                <img className="choose__card__img" src={choosecar} alt="" />
                <div className="choose__card__right">
                  <div className="choose__card__right__top">
                    <div className="card__top__left">
                      <div className="choose__card__right__top__text">
                        <p>TANK 300</p>
                        <a href="#">2.0 л. Бензин, Полный, Автоматическая</a>
                      </div>
                      <strike>3 649 000 ₽</strike>
                    </div>
                    <div className="card__top__right">
                      <Button
                        className="choose__card__top__btn"
                        variant="contained"
                      >
                        Получить предложение
                        <FaChevronRight />
                      </Button>
                      <Button variant="outlined">
                        Тест-драйв
                        <FaChevronRight />
                      </Button>
                    </div>
                  </div>
                  <div className="choose__card__right__bottom">
                    <div className="choose__img__text">
                      <img src={choose1} alt="" />
                      <span>Выгода по Trade-in до 450 000 ₽ </span>
                    </div>
                    <div className="choose__img__text">
                      <img src={choose2} alt="" />
                      <span>Керамическое покрытие в подарок!</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="choose__card">
                <img className="choose__card__img" src={choosecar} alt="" />
                <div className="choose__card__right">
                  <div className="choose__card__right__top">
                    <div className="card__top__left">
                      <div className="choose__card__right__top__text">
                        <p>TANK 300</p>
                        <a href="#">2.0 л. Бензин, Полный, Автоматическая</a>
                      </div>
                      <strike>3 649 000 ₽</strike>
                    </div>
                    <div className="card__top__right">
                      <Button
                        className="choose__card__top__btn"
                        variant="contained"
                      >
                        Получить предложение
                        <FaChevronRight />
                      </Button>
                      <Button variant="outlined">
                        Тест-драйв
                        <FaChevronRight />
                      </Button>
                    </div>
                  </div>
                  <div className="choose__card__right__bottom">
                    <div className="choose__img__text">
                      <img src={choose1} alt="" />
                      <span>Выгода по Trade-in до 450 000 ₽ </span>
                    </div>
                    <div className="choose__img__text">
                      <img src={choose2} alt="" />
                      <span>Керамическое покрытие в подарок!</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="choose__card">
                <img className="choose__card__img" src={choosecar} alt="" />
                <div className="choose__card__right">
                  <div className="choose__card__right__top">
                    <div className="card__top__left">
                      <div className="choose__card__right__top__text">
                        <p>TANK 300</p>
                        <a href="#">2.0 л. Бензин, Полный, Автоматическая</a>
                      </div>
                      <strike>3 649 000 ₽</strike>
                    </div>
                    <div className="card__top__right">
                      <Button
                        className="choose__card__top__btn"
                        variant="contained"
                      >
                        Получить предложение
                        <FaChevronRight />
                      </Button>
                      <Button variant="outlined">
                        Тест-драйв
                        <FaChevronRight />
                      </Button>
                    </div>
                  </div>
                  <div className="choose__card__right__bottom">
                    <div className="choose__img__text">
                      <img src={choose1} alt="" />
                      <span>Выгода по Trade-in до 450 000 ₽ </span>
                    </div>
                    <div className="choose__img__text">
                      <img src={choose2} alt="" />
                      <span>Керамическое покрытие в подарок!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="choose__btn__wrapper">
              <Button variant="outlined">Загрузить еще</Button>
            </div>
          </div>
          <div className="choose__wrapper__bottom">
            <img src={choosebottom} alt="" />
            <div className="choose__wrapper__bottom__content">
              <p>ОБМЕН ПО TRADE-IN НА ВЫГОДНЫХ УСЛОВИЯХ</p>
              <Button variant="contained">
                Отправить заявку
                <FaChevronRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
