import React from "react";

const Logo = () => {
  return (
    <img
      src={process.env.PUBLIC_URL + "/images/logo_ballulala.png"}
      alt="Website Logo"
      style={{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "25%",
        height: "auto",
      }}
    />
  );
};

export default Logo;
