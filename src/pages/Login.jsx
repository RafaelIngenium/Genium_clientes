import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { put_info_user } from '../store/login/login.action';
import { FaSpinner } from 'react-icons/fa';
import md5 from 'md5';
import logo from '../assets/images/genium-mascot.png';
import api from '../services/api';
import pt from '../assets/images/pt.png';
import es from '../assets/images/es.png';
import en from '../assets/images/en.png';
import intl from 'react-intl-universal';

const locales = {
  'pt-BR': require('../locales/pt-BR.json'),
  'en-US': require('../locales/en-US.json'),
  'es-SP': require('../locales/es-SP.json')
};

const mapDispatchToProps = dispatch => {
  return {
    put_info_user: (id,language) => {
      put_info_user(id,language)(dispatch);
    }
  };
};

class Login extends Component {
  constructor(props){
    super(props)
      this.state = {
        accept_terms: localStorage.getItem('accept_terms') === 'true',
        username: '',
        password: '',
        language: localStorage.getItem('language_genium') === null ? 'pt-BR': localStorage.getItem('language_genium'),
        redirect: false,
        loading: false
      }
  }

  async handleSubmit(event) {
    event.preventDefault();
    let validation = false;
    const { username, password, language, accept_terms } = this.state;

    this.setState({ loading: true });

    if(!username){
      document.getElementById('user-input').style.display = 'block';
      validation = true;
    }

    if(!password){
      document.getElementById('pass-input').style.display = 'block';
      validation = true;
    }

    if(!accept_terms){
      document.getElementById('term-input').style.display = 'block';
      validation = true;
    }

    if(!validation){
      const response = await api.get(
        `/login?username=${username}&password=${md5(password)}`
      );

      const { id } = response.data;

      if (id) {
        this.props.put_info_user(id,language);
        this.setState({redirect: true});
      }else{
        document.getElementById('invalid-input').style.display = 'block';
      }
    }

    this.setState({ loading: false });
  }

   handleAcceptTerms = e => {
     localStorage.setItem('accept_terms', e.target.checked);
     this.setState({ accept_terms: e.target.checked });
   }

   handleLanguage = (e, language) => {
    localStorage.setItem('language_genium', language);
    this.setState({ language: language });
  }

    render(){
      const { username, password, accept_terms, language, redirect, loading } = this.state;
      const currentLocale = language;

      intl.init({
        currentLocale,
        locales
      });

      if(redirect)
        return <Redirect to='/app/dashboard' />

      return (
        <div className="login">
          <div className="login__wrapper">
            <div className="login__content">
              <div className="login__content__logo">
                <div className="login__content__logo__img">
                  <img src={logo} alt="" />
                </div>
                <div className="login__content__logo__text">Genium</div>
              </div>

              <div className="login__content__title">
                  {intl.get('welcome.title')}
              </div>

              <form onSubmit={e => this.handleSubmit(e)} className="login__content__form">
                <div className="login__content__form__input">
                  <label>{intl.get('user.title')}</label>
                  <input
                    type="text"
                    value={username}
                    onChange={event => this.setState({username: event.target.value})}
                  />
                  <span id="user-input" style={{fontSize: '12px', fontWeight: 'bold', color: 'red', display: 'none'}}>Campo de preenchimento obrigatório</span>
                </div>

                <div className="login__content__form__input">
                  <label>{intl.get('password.title')}</label>
                  <input
                    type="password"
                    value={password}
                    onChange={event => this.setState({password: event.target.value})}
                  />
                  <span  id="pass-input" style={{fontSize: '12px', fontWeight: 'bold', color: 'red', display: 'none'}}>Campo de preenchimento obrigatório</span>
                  <span  id="invalid-input" style={{fontSize: '12px', fontWeight: 'bold', color: 'red', display: 'none'}}>Usuário ou senha inválidos</span>
                </div>

                <div className="login__content__form__terms">
                  <label className="checkbox">
                    <input
                      className="login__content__form__terms__input"
                      onClick={this.handleAcceptTerms}
                      id="accept_terms"
                      name="accept_terms"
                      type="checkbox"
                      value={accept_terms}
                      defaultChecked={accept_terms}
                    />

                    <div className="login__content__form__terms__text">
                        {intl.get('accept.title')}
                      <span>
                        <a className="login__content__form__terms__link" href="#">
                        {intl.get('terms.title')}
                        </a>
                      </span>
                      <span  id="term-input" style={{fontSize: '12px', fontWeight: 'bold', color: 'red', display: 'none'}}>Aceite os termos para prosseguir</span>
                    </div>
                  </label>
                </div>
                <div className="login__content__form__btn-container">
                  <button className="btn btn--primary" type="submit">
                  {loading ? (
                      <FaSpinner color="#FFF" size={14} />
                    ) : (
                      intl.get('login.title')
                    )}
                  </button>
                  <button className="btn-text btn-text--underline">
                  {intl.get('remember_pass.title')}?
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div style={{ float: 'right', margin: '20px', cursor: 'pointer' }}>
            <img src={pt} width="35" onClick={e => this.handleLanguage(e,'pt-BR')} />
            <img src={en} width="35" onClick={e => this.handleLanguage(e,'en-US')} />
            <img src={es} width="35" onClick={e => this.handleLanguage(e,'es-SP')} />
          </div>
        </div>
      );
    }
}

export default connect(null, mapDispatchToProps)(Login);