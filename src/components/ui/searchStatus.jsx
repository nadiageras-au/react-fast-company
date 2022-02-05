import React from "react";
import PropTypes from "prop-types";

// const SearchStatus = ({ length }) => {
//     const renderPhrase = (number) => {
//         if (number === 0) {
//             return (
//                 <div className="badge bg-danger">
//                     Никто не тусанет с тобой сегодня
//                 </div>
//             );
//         } else {
//             let num = Math.abs(number);
//             num %= 100;
//             num %= 10;
//             if (num >= 5 && num <= 20) {
//                 return (
//                     <div className="badge bg-primary">
//                         {number + ` человек готовы тусануть с тобой`}
//                     </div>
//                 );
//             } else {
//                 return (
//                     <div className="badge bg-primary">
//                         {number + ` человека готовы тусануть с тобой`}
//                     </div>
//                 );
//             }
//         }
//     };

//     return <h1 className="text-center">{renderPhrase(length)}</h1>;
// };

// SearchStatus.propTypes = {
//     length: PropTypes.number.isRequired
// };

const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if (number > 4 && number < 15) {
            return "человек тусанет";
        }
        if (lastOne === 1) return "человек тусанет";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
        return "человек тусанет";
    };
    return (
        <h2>
            <span
                className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}
            >
                {length > 0
                    ? `${length + " " + renderPhrase(length)}   с тобой сегодня`
                    : "Никто с тобой не тусанет"}
            </span>
        </h2>
    );
};
SearchStatus.propTypes = {
    length: PropTypes.number
};

export default SearchStatus;
