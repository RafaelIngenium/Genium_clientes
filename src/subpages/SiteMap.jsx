import React from "react";
import SubPageHeader from "../components/misc/SubPageHeader";
import SiteMapComponent from "../components/SiteMap/SiteMapComponent";

const SiteMap = () => {
  return (
    <div>
      <SubPageHeader
        title="Fluxos"
        actionEnabled={true}
        actionBtnLabel="Criar novo fluxo"
        extraClasses="search--fluxo"
      />
      <SiteMapComponent />
    </div>
  );
};

export default SiteMap;
