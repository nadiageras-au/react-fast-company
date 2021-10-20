import React from "react";

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    if (number === 0) {
      return (
        <h1 className="badge bg-danger">Никто не тусанет с тобой сегодня</h1>
        
      );
    } else {
      let num = Math.abs(number);
      num %= 100;
      num %= 10;
      console.log((num %= 100));
      if (num >= 5 && num <= 20) {
        return (
          <h1 className="badge bg-primary">
            {number + ` человек готовы тусануть с тобой`}
          </h1>
        );
      } else
        return (
          <h1 className="badge bg-primary">
            {number + ` человека готовы тусануть с тобой`}
          </h1>
        );
    }
  };

  return <h1 className="text-center">{renderPhrase(length)}</h1>;
};

export default SearchStatus;
