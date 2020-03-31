import React from "react";
import _ from "lodash";
import DEFAULT from "../../build/images/default.png"
import BOT from "../../build/images/Profile Bot -1.png"

const TopFiveItem = ({ type,agents }) => {
  agents = _.orderBy(agents, ['insla'],['desc']);
  return (
    <>
        {type === "user" && (
          agents.slice(0, 5).map(agent => (
            <div className="top-five__content__item">
                <div className="user-info">
                  <div className="user-info__photo">
                    <img
                      className="user-info__photo__img"
                      src={DEFAULT}
                      alt=""
                    />
                  </div>
                  <div className="user-info__text">
                    <div className="user-info__text__title">
                      <div className="user-info__text__title__name">
                        {" "}
                        {agent.username}
                        </div>

                        <span>
                          {/* <?php include './../build/images/webchat-icon.svg'; ?> */}
                        </span>
                      </div>
                      <div className="user-info__text__subtitle">
                       {agent.ramal}
                      </div>
                    </div>
                  </div>
                </div>
            )))
        }
        {type === "flow" && (
          <div className="top-five__content__item">
              <div className="user-info">
                  <div className="user-info__photo">
                    <img
                      className="user-info__photo__img"
                      src={BOT}
                      alt=""
                    />
                  </div>
                  <div className="user-info__text">
                    <div className="user-info__text__title">SAC</div>
                  </div>
              </div>
          </div>
        )}
        </>
  );
};

export default TopFiveItem;
