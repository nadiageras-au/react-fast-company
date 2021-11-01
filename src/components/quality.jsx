import React from "react";
import PropTypes from "prop-types";

const Quality = ({ color, name, id }) => {
    return (
        <span key={id} className={"badge rounded-pill m-2 bg-" + color}>
            {name}
        </span>
    );
};

Quality.propTypes = {
    color: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default Quality;
