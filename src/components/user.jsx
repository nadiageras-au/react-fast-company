import React from "react";
import Qualitie from "./qualitie";

const User = (
  _id,
  name,
  profession,
  qualities,
  completedMeetings,
  rate,
  onDelete
) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((quality) => (
          <Qualitie
            key={quality._id}
            name={quality.name}
            color={quality.color}
          />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <button onClick={() => onDelete(_id)} className="btn btn-danger btn-sm">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
