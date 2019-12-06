import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 9999,
        color: "white",
        backgroundColor: "grey"
      }}
    >
      <h1>Carregando...</h1>
    </div>
  );
};

export default Loading;
