import React from "react";

const Footer = (props) => {
  return (
    <footer onClick={props.clickMe}>
      {props.isMarried ? "Я Женат" : "Я все ещё счастлив, так как не женат"}
    </footer>
  );
};

export default Footer;
