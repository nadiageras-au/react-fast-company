import React from "react";
import PropTypes from "prop-types";
import Qualitie from "../qualities/qualitie";

const QualitiesList = ({ qualities }) => {
    return (
        <>
            {qualities.map((qualitie) => (
                <Qualitie
                    id={qualitie._id}
                    key={qualitie._id}
                    name={qualitie.name}
                    color={qualitie.color}
                />
            ))}
        </>
    );
};

QualitiesList.propTypes = {
    qualities: PropTypes.array.isRequired
};

export default QualitiesList;
