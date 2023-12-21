import React from "react";

const Loader = () => {
  return (
    <div className="text-center m-5">
      <div
        className="spinner-border"
        role="status"
        style={{ height: "4rem", width: "4rem" }}
      ></div>
    </div>
  );
};

export default Loader;
