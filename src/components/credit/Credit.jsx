import React from "react";
import kredit from "../../assets/images/kredit.png";
import { Button } from "@mui/material";
import { PatternFormat } from "react-number-format";
import { FaChevronRight } from "react-icons/fa6";

const Credit = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${kredit})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="credit"
    >
      <div className="container">
        <div className="credit__wrapper">
          <div className="credit__wrapper__top">
            <p>Оставьте заявку на кредит</p>
            <span>и получите одобрение за 1 день!</span>
          </div>
          <div className="credit__wrapper__bottom">
            <form className="credit__form">
              <span>Телефон</span>
              <div className="input__wrapper">
                <PatternFormat
                  className="contact__form__input"
                  format="+7 (##) ### # #"
                  allowEmptyFormatting
                  mask="_"
                />
                <Button variant="contained">
                  Отправить заявку
                  <FaChevronRight />
                </Button>
              </div>
            </form>
            <div className="form__link__checkbox">
              <input type="checkbox" />
              <a href="#">Согласен на обработку персональных данных.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credit;
