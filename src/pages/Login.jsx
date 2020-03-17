import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Mascot from "../assets/images/genium-mascot.png";
import { userLoginAsync } from "../store/user/user.action";
import { changeLanguage } from "../store/environment/environment.action";
import md5 from "md5";
import pt from '../assets/images/pt.png';
import es from '../assets/images/es.png';
import en from '../assets/images/en.png';
import intl from 'react-intl-universal';

const locales = {
  'pt-BR': require('../locales/pt-BR.json'),
  'en-US': require('../locales/en-US.json'),
  'es-SP': require('../locales/es-SP.json')
};

export default function Login () {
  const userFailure                = useSelector(state => state.userReducer.error);
  const currentLocale              = useSelector(state => state.environmentReducer.language);
  const [username, setUsername]    = useState("");
  const [password, setPassword]    = useState("");
  const [acceptTherm, setTherm]    = useState(false);
  const [errorInputs, setInputs]   = useState(false);
  const [errorTherm, setMsgtherm]  = useState(false);         
  const dispatch                   = useDispatch();

  useEffect(() => {
    const storageTherm = localStorage.getItem('therm_genium');

    if(storageTherm){
      setTherm(JSON.parse(storageTherm))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('therm_genium', JSON.stringify(acceptTherm));
  }, [acceptTherm]);

  function handleLogin (event) {
    event.preventDefault();

    if(!acceptTherm)
      return (setMsgtherm(true))

    if(username === ""  || password === "")
      return (setInputs(true))

    dispatch(userLoginAsync(username, md5(password)));
    setInputs(false)
    setMsgtherm(false)
  };

  function handleLanguage(language){
    dispatch(changeLanguage(language))
    localStorage.setItem('language_genium', language);
  }

  intl.init({
    currentLocale,
    locales
  });

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
              {intl.get('welcome.title')}
          </div>
          {userFailure && (
            <p
              style={{
                color: "red",
                fontSize: "12px",
                textAlign: "center",
                marginBottom: "4px",
                fontWeight: "bold"
              }}
            >
              {intl.get('user_invalid.title')}
            </p>
          )}
          {errorInputs && (
            <p
              style={{
                color: "red",
                fontSize: "12px",
                textAlign: "center",
                marginBottom: "4px",
                fontWeight: "bold"
              }}
            >
               {intl.get('insert_inputs.title')}
            </p>
          )}
          {errorTherm && (
            <p
              style={{
                color: "red",
                fontSize: "12px",
                textAlign: "center",
                marginBottom: "4px",
                fontWeight: "bold"
              }}
            >
             {intl.get('accept_msg_error.title')}
            </p>
          )}
          <form onSubmit={handleLogin} className="login__content__form">
            <div className="login__content__form__input">
              <label>{intl.get('user.title')}</label>
              <input
                type="text"
                placeholder={intl.get('user.title')}
                alt=""
                onChange={event => setUsername(event.target.value)}
                value={username}
              />
            </div>

            <div className="login__content__form__input">
              <label>{intl.get('password.title')}</label>
              <input
                type="password"
                placeholder={intl.get('password.title')}
                alt=""
                onChange={event => setPassword(event.target.value)}
                value={password}
              />
            </div>

            <div className="login__content__form__terms">
              <label className="checkbox">
                <input
                  className="login__content__form__terms__input"
                  type="checkbox"
                  onClick={event => setTherm(event.target.checked)}
                  id="term_accept"
                  name="term_accept"
                  checked={acceptTherm}
                />

                <div className="login__content__form__terms__text">
                  {intl.get('accept.title')}
                  <span>
                    <span
                      className="login__content__form__terms__link"
                      href="#"
                    >
                      {intl.get('terms.title')}
                    </span>
                  </span>
                </div>
              </label>
            </div>

            <div className="login__content__form__btn-container">
              <button type="submit" className="btn btn--primary" onClick={handleLogin}>
                {intl.get('login.title')}
              </button>
              <button className="btn-text btn-text--underline">
                {intl.get('remember_pass.title')}?
              </button>
            </div>
          </form>
        </div>
      </div>
      <div style={{ float: 'right', margin: '20px', cursor: 'pointer' }}>
            <img src={pt} width="35" alt="pt-BR" onClick={() => handleLanguage('pt-BR')} />
            <img src={en} width="35" alt="en-US" onClick={() => handleLanguage('en-US')} />
            <img src={es} width="35" alt="es-SP" onClick={() => handleLanguage('es-SP')} />
      </div>
    </div>
  );
}
