import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

// {qualities.map((quality) => (
//   <Qualitie
//     key={quality._id}
//     name={quality.name}
//     color={quality.color}
//   />
// ))}
const User = ({
  _id,
  name,
  profession,
  qualities,
  completedMeetings,
  rate,
  onDelete,
  onToggleBookmark,
  marked = false,
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((quality) => (
          <Qualitie
            id={quality._id}
            name={quality.name}
            color={quality.color}
          />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <Bookmark onToggleBookmark={onToggleBookmark} _id={_id} marked={marked} />
      </td>
      <td>
        <button onClick={() => onDelete(_id)} className="btn btn-danger btn-sm">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
