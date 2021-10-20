import React from "react";

const Qualitie = ({ color, name, id }) => {
  return (
    <span key={id} className={"badge rounded-pill m-2 bg-" + color}>
      {name}
    </span>
  );
};

export default Qualitie;
