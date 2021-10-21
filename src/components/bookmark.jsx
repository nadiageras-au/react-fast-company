import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ onToggleBookmark, marked, _id }) => {
    if (marked) {
        return (
            <i
                onClick={() => onToggleBookmark(_id, marked)}
                className="bi bi-bookmark-fill"
            ></i>
        );
    } else {
        return (
            <i
                onClick={() => onToggleBookmark(_id, marked)}
                className="bi bi-bookmark"
            ></i>
        );
    }
};

BookMark.propTypes = {
    onToggleBookmark: PropTypes.func.isRequired,
    marked: PropTypes.bool,
    _id: PropTypes.string.isRequired
};

export default BookMark;
