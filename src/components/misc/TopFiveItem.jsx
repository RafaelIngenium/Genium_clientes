import React from "react";
import _ from "lodash";
import DEFAULT from "../../build/images/default.png"

const TopFiveItem = ({ type,agents }) => {
  console.log("ANTES", agents)
  agents = _.orderBy(agents, ['insla'],['desc']);
  console.log("DEPOIS", agents)
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
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7MB3vS-7uVvMEqlf-ExEJgJ64b0ozAA0Un8GQrbwOnZG6dZqjQ"
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
