import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        if (number === 0) {
            return (
                <div className="badge bg-danger">
                    Никто не тусанет с тобой сегодня
                </div>
            );
        } else {
            let num = Math.abs(number);
            num %= 100;
            num %= 10;
            if (num >= 5 && num <= 20) {
                return (
                    <div className="badge bg-primary">
                        {number + ` человек готовы тусануть с тобой`}
                    </div>
                );
            } else {
                return (
                    <div className="badge bg-primary">
                        {number + ` человека готовы тусануть с тобой`}
                    </div>
                );
            }
        }
    };

    return <h1 className="text-center">{renderPhrase(length)}</h1>;
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;
