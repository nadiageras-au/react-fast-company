import React from "react";

const BookMark = ({ onToggleBookmark, marked, _id }) => {
  if (marked) {
    return (
      <i
        onClick={() => onToggleBookmark(_id, marked)}
        className="bi bi-bookmark-fill"
      ></i>
    );
  } else
    return (
      <i
        onClick={() => onToggleBookmark(_id, marked)}
        className="bi bi-bookmark"
      ></i>
    );
};

export default BookMark;
