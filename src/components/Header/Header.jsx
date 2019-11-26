import React from "react";
import { ReactComponent as IconBell } from "../../assets/images/icon-bell.svg";

const Header = () => {
  return (
    <div className="container__content__header">
      <header className="header">
        <div className="header__col">
          <div className="header__logo">
            <img
              className="header__logo__img"
              src="../build/images/genium.png"
              alt=""
            />
          </div>
        </div>
        <div className="header__col">
          <div className="header__notification">
            <div className="header__notification__item">
              <IconBell />
            </div>
          </div>
          <div className="header__user">
            <div className="header__user__photo">
              <img
                className="header__user__photo__img"
                src="https://image.freepik.com/fotos-gratis/adolescente-feliz-que-mostra-gestos-positivos_1149-951.jpg"
                alt=""
              />
            </div>

            <div className="header__user__btn">
              <div className="header__user__btn__name">
                Olá,
                <span>Marcos</span>
              </div>
              <div className="header__user__btn__icon">
                <i className="material-icons">keyboard_arrow_down</i>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
