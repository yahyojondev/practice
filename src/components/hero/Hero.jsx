import React from "react";
import hero from "../../assets/images/hero.png";
import { Button } from "@mui/material";
import { FaAngleRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionX: "center",
      }}
    >
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__text__wrapper">
            <span>Улучшим любые условия</span>
            <p>TANK 500</p>
            <span>Осталось всего 5 автомобилей!</span>
          </div>
          <Button variant="contained">
            Получить предложение <FaAngleRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
