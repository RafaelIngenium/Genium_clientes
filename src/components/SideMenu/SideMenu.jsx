import React from "react";
import MascotLogo from "../../assets/images/genium-mascot.png";
import SideMenuItem from "./SideMenuItem";

const SideMenu = () => {
  const itemsConfig = [
    { icon: "graphbar", path: "dashboard" },
    { icon: "sitemap", path: "sitemap" },
    { icon: "robot", path: "robot" }
    // { icon: "commentsalt", path: "commentsalt" },
    // { icon: "exchangealt", path: "exchangealt" }
  ];
  return (
    <aside className="container__menu">
      <div className="menu">
        <div className="menu__logo">
          <img src={MascotLogo} alt="Genium" />
        </div>
        <div className="menu__elements">
          {itemsConfig.map((item, i) => (
            <SideMenuItem key={i} icon={item.icon} path={item.path} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
