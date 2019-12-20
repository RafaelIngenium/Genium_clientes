import React, { useState } from "react";
import { connect } from "react-redux";
import Mascot from "../assets/images/genium-mascot.png";
import { userLogin, userLoginAsync } from "./../store/user/user.actions";
import md5 from "md5";

const Login = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = event => {
    event.preventDefault();
    props.userLoginAsync(username, password);
    // console.log("User:" + username, "Password:" + md5(password));
  };

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
          {props.error.msg && (
            <p
              style={{
                color: "red",
                fontSize: "12px",
                textAlign: "center",
                marginBottom: "4px",
                fontWeight: "bold"
              }}
            >
              {props.error.msg}
            </p>
          )}
          <form onSubmit={handleLogin} className="login__content__form">
            <div className="login__content__form__input">
              <label>Usuário</label>
              <input
                type="text"
                placeholder="João"
                alt=""
                onChange={event => setUsername(event.target.value)}
              />
            </div>

            <div className="login__content__form__input">
              <label>Senha</label>
              <input
                type="password"
                placeholder="***"
                alt=""
                onChange={event => setPassword(md5(event.target.value))}
              />
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
                    <span
                      className="login__content__form__terms__link"
                      href="#"
                    >
                      Termos de Serviços
                    </span>
                  </span>
                </div>
              </label>
            </div>

            <div className="login__content__form__btn-container">
              <button className="btn btn--primary" onClick={handleLogin}>
                Entrar
              </button>
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

const mapDispatchToProps = dispatch => ({
  userLogin: () => dispatch(userLogin()),
  userLoginAsync: (username, password) =>
    dispatch(userLoginAsync(username, password))
});

const mapStateToProps = ({ userReducer }) => ({
  error: userReducer.error
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
