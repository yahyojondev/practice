import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import tatyana from "../../assets/images/tatyana.png";
import { Button } from "@mui/material";
import navigator from "../../assets/images/map.png";
import { AiOutlineUp } from "react-icons/ai";

const Client = () => {
  return (
    <div className="client">
      <div className="container">
        <div className="client__wrapper">
          <div className="client__wrapper__top">
            <div className="client__wrapper__top__left">
              <p>Индивидуальное предложение для корпоративных клиентов</p>
              <Button variant="contained">
                Отправить заявку
                <FaChevronRight />
              </Button>
            </div>
            <div className="client__wrapper__top__right">
              <img src={tatyana} alt="" />
              <div className="client__top__right__text">
                <p>Татьяна Санникова</p>
                <span>Отдел корпоративных продаж АВТОРУСЬ</span>
              </div>
            </div>
          </div>
          <div className="client__wrapper__center">
            {/* kwjsdf */}

            <iframe
              className="client__center__map"
              src="https://yandex.uz/map-widget/v1/org/avtoruss_tank/216874665819/posts/?ll=37.731514%2C55.881930&z=15"
              width="560"
              height="400"
            ></iframe>
            {/* kwjsdf */}
            <img src={navigator} alt="naviagtor" />
            <div className="client__center__absolute">
              <div className="client__center__absolute__left">
                <div className="text__wrapper__left">
                  <span>Адрес</span>
                  <p>
                    Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
                  </p>
                </div>
                <div className="text__wrapper__left">
                  <span>Телефон</span>
                  <p>+7 (999) 999-99-99</p>
                  <span>Мы на связи</span>
                </div>
                <div className="text__wrapper__left">
                  <span>Режим работы</span>
                  <p className="client__map__text">
                    Ежедневно с 09:00 до 21:00
                  </p>
                </div>
              </div>
              <Button variant="contained">
                Заказать звонок <FaChevronRight />
              </Button>
            </div>
          </div>
          <div className="client__wrapper__bottom">
            <p>
              Дисклеймер <AiOutlineUp />
            </p>
            <span>
              TANK 300 за 3 799 000руб с учетом поддержек. Цена на модель TANK
              (ТЭНК) 300 в комплектации Adventure (Эдвенчер) с двигателем 2,0T
              4WD, 2023 года производства, цвет автомобиля: белый, с учетом
              выгоды по трейд-ин 300 000 рублей. В трейд-ин принимаются
              автомобили с пробегом со сроком владения и регистрации (постановки
              на учет) в органах ГИБДД не менее 6 месяцев (в отношении
              автомобилей бренда TANK, Haval, Great Wall – 3 месяца) до сдачи
              автомобиля в трейд-ин. В качестве документов, подтверждающих срок
              владения сдаваемого в трейд-ин автомобиля, собственнику необходимо
              предоставить копию ПТС или СТС или карточку учета ТС из ГИБДД с
              печатью и подписью. Подробности уточняйте у менеджеров отдела
              продаж TANK АВТОРУСЬ. Предложение ограничено, не является офертой
              и действует с 01.04.2024г. <br />
              <br /> TANK 500 за 5 349 000 руб с учетом поддержек. Цена на
              модель TANK (ТЭНК) 500 в комплектации Adventure (Эдвенчер) с
              двигателем 3,0T 4WD, 2023 года производства, цвет автомобиля:
              белый, с учетом прямой выгоды в 950 000 рублей. Подробности
              уточняйте у менеджеров отдела продаж TANK АВТОРУСЬ. Предложение
              ограничено, не является офертой и действует с 01.04.2024г.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
