import React from "react";
import PropTypes from "prop-types";

const Search = ({ value, onChange }) => {
    return (
        <form>
            <label htmlFor="query" className="" />
            <input
                type="text"
                name="search"
                onChange={onChange}
                value={value}
                placeholder="Search"
            />
        </form>
    );
};

Search.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default Search;
