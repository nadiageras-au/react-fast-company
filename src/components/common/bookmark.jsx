import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ onClick, marked }) => {
    if (marked) {
        return (
            <i onClick={() => onClick()} className="bi bi-bookmark-fill"></i>
        );
    } else {
        return <i onClick={() => onClick()} className="bi bi-bookmark"></i>;
    }
};

Bookmark.propTypes = {
    onClick: PropTypes.func.isRequired,
    marked: PropTypes.bool
};

export default Bookmark;
