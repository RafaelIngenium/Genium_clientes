import React from "react";
import { connect,useSelector } from "react-redux";
import { userLogout } from "../../store/user/user.action";
import { ReactComponent as IconBell } from "../../assets/images/icon-bell.svg";
import { ReactComponent as Question } from "../../assets/images/question.svg";
import { ReactComponent as Moon } from "../../assets/images/moon.svg";
import { ReactComponent as Settings } from "../../assets/images/settings.svg";
import { ReactComponent as Out } from "../../assets/images/out.svg";
import { PopOver } from "./../../utils/Typpy";

const Header = ({ userLogout }) => {
  const displayname = useSelector(state => state.userReducer.user.displayname);

  const handleLogOut = () => {
    userLogout();
  };

  // renderPopOver;
  const renderPopOver = () => {
    return (
      <div className="list-drop list-drop--primary">
        <div className="header__user__name">{displayname}</div>
        <div className="list-drop__item">
          <Moon />
          Dark Mode
        </div>
        <div className="list-drop__item">
          <Settings />
          Settings
        </div>
        <div className="list-drop__item" onClick={handleLogOut}>
          <Out /> Logout
        </div>
      </div>
    );
  };

  return (
    <div className="container__content__header">
      <header className="header">
        <div className="header__col">
          <div className="header__logo"></div>
        </div>
        <div className="header__col">
          <div className="header__notification">
            <div className="header__notification__item">
              <Question />
            </div>
            <div className="header__notification__item">
              <IconBell />
            </div>
          </div>
          <div className="header__separator"></div>
          <div className="header__user">
            <PopOver
              placement="bottom"
              trigger="click"
              interactive={true}
              content={renderPopOver()}
            >
              <div className="header__user__photo">
                <img
                  className="header__user__photo__img"
                  src="https://image.freepik.com/fotos-gratis/adolescente-feliz-que-mostra-gestos-positivos_1149-951.jpg"
                  alt=""
                />
              </div>
            </PopOver>
          </div>
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = ({ userReducer }) => ({
  user: userReducer.user
});

const mapDispatchToProps = dispatch => ({
  userLogout: () => dispatch(userLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
