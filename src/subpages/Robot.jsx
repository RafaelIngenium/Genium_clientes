import React from "react";
import RobotComponent from "../components/Robot/RobotComponent";
import SubPageHeader from "../components/misc/SubPageHeader";
import ChatPanel from "../components/ChatPanel/ChatPanel";
import SideMenu from "../components/SideMenu/SideMenu";
import Header from "../components/Header/Header";
import Modal from "../components/modal/Modal";

const Robot = () => {
  return (
          <div className="container">
              <SideMenu />
                <div className="container__content">
                    <Header />
                    <div className="container__content__body">
                        <div className="flex container__content__body--absolute">
                          <div className="flex__container">
                            <div className="main">
                              <SubPageHeader
                                title="Bot"
                                actionEnabled={true}
                                actionBtnLabel="Salvar e fechar"
                                withButton={true}
                              />
                              <RobotComponent />
                            </div>
                          <Modal />
                        </div>
                    </div>
                </div>
                <ChatPanel />
            </div>
        </div>
  );
};

export default Robot;
