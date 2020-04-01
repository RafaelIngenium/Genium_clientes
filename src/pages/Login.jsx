import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Mascot from "../build/images/genium-mascot.png";
import { userLoginAsync } from "../store/user/user.action";
import { changeLanguage } from "../store/environment/environment.action";
import md5 from "md5";
import pt from '../build/images/pt.png';
import es from '../build/images/es.png';
import en from '../build/images/en.png';
import intl from 'react-intl-universal';
import Feito from "../build/images/genium-mascot.png"
import {ReactComponent as View} from "../build/images/view.svg"
import {ReactComponent as Checkmark} from "../build/images/checkmark.svg"
import VIDEOBUILD from "../build/images/Genium-Build-Together.gif"

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
  const [seePass, setSeePass]      = useState(true);
  const [errorInputs, setInputs]   = useState(false);         
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

    if(username === ""  || password === "")
      return (setInputs(true))

    dispatch(userLoginAsync(username, md5(password)));
    setInputs(false)
  };

  function handleLanguage(language){
    dispatch(changeLanguage(language))
    localStorage.setItem('language_genium', language);
  }

  function showPassword(){
    if(seePass)
    document.getElementById('resend-password').type = 'text';
    else
    document.getElementById('resend-password').type = 'password';
    setSeePass(!seePass)
  }

  intl.init({
    currentLocale,
    locales
  });

  return (
          <div class="login">
              <div class="login__wrapper">
                <div class="login__wrapper__col1">
                  <div class="header-login">
                    <div class="logo-login">
                        <img src={Mascot} alt="" />
                    </div>
                    <a href="#">Inscrever-se</a>
                  </div>

                  <div class="container-login active">
                      <form class="form-login" onSubmit={handleLogin} >
                        <div class="title">{intl.get('sign_login.title')} Genium</div>

                        <div class={userFailure || errorInputs ? "container-inputs erro": "container-inputs"}>
                          <label for="resend-email">{intl.get('user.title')}</label>
                          <input 
                            id="resend-email" 
                            type="email" 
                            placeholder=""
                            onChange={event => setUsername(event.target.value)}
                            value={username}
                         />
                        </div>

                        <div class={userFailure || errorInputs ? "container-inputs erro": "container-inputs"}>
                          <div class="label-pasword">
                            <label for="resend-password" placeholder={intl.get('password.title')}> {intl.get('password.title')}</label>
                            {/* <div class="forgotLink">Forgot?</div> */}
                          </div>

                          <div class="container-inputs__input">
                            <input 
                              type="password" 
                              id="resend-password" 
                              placeholder=""
                              alt=""
                              onChange={event => setPassword(event.target.value)}
                              value={password}
                            />
                            <div class={seePass ? 'icon active':'icon'} onClick={showPassword}>
                              <View />
                            </div>
                          </div>
                          {userFailure && (
                              <span className="erro-resend">{intl.get('user_invalid.title')}</span>
                            )}
                            {errorInputs && (
                                <span className="erro-resend">{intl.get('insert_inputs.title')}</span>
                            )}
                        </div>
                        <button class="btn btn--primary" type="submit" onClick={handleLogin}>{intl.get('login.title')}</button>
                      </form>
                  </div>

                  <div class="container-forgot">
                    <form action="" class="form-login">

                      <div class="notification success ">
                        <Checkmark /> A Email has been to reset your password
                      </div>


                      <div class="title">Forgot Password?</div>
                      <div class="text">Enter your email to reset your password</div>

                      <div class="container-inputs">
                        <label for="resend-email">Email</label>
                        <input id="resend-email" type="email" placeholder="john@appleseed.com" require />

                        <span class="erro-resend">Please provide a vaid email</span>

                      </div>

                      <button class="btn btn--primary" type="submit">Reset password</button>

                      <span class="span-link">Go back to <a href="#">Sign in</a></span>
                    </form>
                  </div>


                  <div class="container-reset-password">
                    <form action="" class="form-login">
                      <div class="title">Reset Password</div>
                        <div class="text"> Enter the password you want to set </div>

                        <div class="container-inputs">
                          <div class="container-inputs__input">
                            <input type="password" placeholder="New password" />
                            <div class="icon">
                              <View />
                            </div>
                          </div>
                        </div>

                        <div class="container-inputs">

                          <div class="container-inputs__input ">
                            <input type="password" placeholder="Verify" />
                            <div class="icon">
                                <View />
                            </div>
                          </div>
                        </div>

                      <button class="btn btn--primary" type="submit">Reset password</button>
                    </form>
                  </div>

                    <div class="container-finish">
                      <div class="form-login">
                        <div class="title">Feito</div>
                          <div class="text"> Your new password has been set. </div>
                            <img src={Feito} alt="" />
                          <button class="btn btn--primary" type="submit">Login</button>
                        </div>
                      </div>
                    </div>

                    <div class="login__wrapper__col2">

                      <div class="title">
                        Build Together for better
                      </div>

                      <div class="wrapper-anim-col2">
                        <img src={VIDEOBUILD} />
                      </div>

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
