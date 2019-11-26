import React from "react";
import { Link } from "react-router-dom";
import Mascot from "../assets/images/genium-mascot.png";

const Login = () => {
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__content">
          <div className="login__content__logo">
            <div className="login__content__logo__img">
              <img src={Mascot} alt="" />
            </div>
            <div className="login__content__logo__text">Genium</div>
          </div>

          <div className="login__content__title">
            Entre com seu e-mail e senha
          </div>

          <form action="" className="login__content__form">
            <div className="login__content__form__input">
              <label>Usuário</label>
              <input type="text" placeholder="João" alt="" />
            </div>

            <div className="login__content__form__input">
              <label>Senha</label>
              <input type="password" placeholder="***" alt="" />
            </div>

            <div className="login__content__form__terms">
              <label className="checkbox">
                <input
                  className="login__content__form__terms__input"
                  type="checkbox"
                />

                <div className="login__content__form__terms__text">
                  Aceito os
                  <span>
                    <a className="login__content__form__terms__link" href="#">
                      Termos de Serviços
                    </a>
                  </span>
                </div>
              </label>
            </div>

            <div className="login__content__form__btn-container">
              <Link to="/">
                <button className="btn btn--primary">Entrar</button>
              </Link>
              <button className="btn-text btn-text--underline">
                Esqueceu a senha?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
