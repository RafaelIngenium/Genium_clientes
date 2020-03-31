import React from "react";
import DashboardComponent from "../components/Dashboard/DashboardComponent";
import SubPageHeader from "../components/misc/SubPageHeader";
import ChatPanel from "../components/ChatPanel/ChatPanel";
import SideMenu from "../components/SideMenu/SideMenu";
import Header from "../components/Header/Header";
import Modal from "../components/modal/Modal";

export default function Dashboard (props) {
  return (
          <div className="container">
              <SideMenu />
                <div className="container__content">
                    <Header />
                    <div className="container__content__body">
                        <div className="flex container__content__body--absolute">
                          <div className="flex__container">
                            <div className="main">
                              <SubPageHeader title="Dashboard" actionEnabled={false} />
                              <DashboardComponent />
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
