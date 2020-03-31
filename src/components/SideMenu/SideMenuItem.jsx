import React from "react";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as GraphBar } from "../../build/images/graph-bar.svg";
import { ReactComponent as SiteMap } from "../../build/images/sitemap.svg";
import { ReactComponent as Robot } from "../../build/images/robot.svg";
import { ReactComponent as CommentsAlt } from "../../build/images/comments-alt.svg";
import { ReactComponent as ExchangeAlt } from "../../build/images/exchange-alt.svg";

const SideMenuItem = props => {
  const { path, icon } = props;
  return (
    <Link to={"/app/" + path}>
      <span
        className={
          props.location.pathname.split("/")[2] === path
            ? "menu__elements__item active"
            : "menu__elements__item"
        }
      >
        <div className="menu__elements__item__icon">
          {icon === "graphbar" && <GraphBar />}
          {icon === "sitemap" && <SiteMap />}
          {icon === "robot" && <Robot />}
          {icon === "commentsalt" && <CommentsAlt />}
          {icon === "exchangealt" && <ExchangeAlt />}
        </div>
      </span>
    </Link>
  );
};

export default withRouter(SideMenuItem);
