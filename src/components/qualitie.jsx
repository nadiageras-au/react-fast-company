import React from "react";

const Qualitie = ({ color, name }) => {
  return (
    <span className={"badge d-block rounded-pill m-2 bg-" + color}>{name}</span>
  );
};

export default Qualitie;
