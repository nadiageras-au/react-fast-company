import React, { useState } from "react";
import api from "../api";

const Usrs = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers((users) => {
      return (users = users.filter((user) => user._id !== userId.id));
    });
  };

  let countUsers = users.length;

  const renderPhrase = (number) => {
    if (number === 0) {
      return (
        <h1 className="badge bg-danger">
          {number + ` человек готовы тусануть с тобой`}
        </h1>
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

  const translateQualities = (array) => {
    return array.map((item) => (
      <span key={item._id} className={`badge m-1 bg-` + item.color}>
        {item.name}
      </span>
    ));
  };

  // const translateProfession = (array) => {
  //   return array.map((elem) => elem.name);
  // };

  const userItem = (props) => {
    return (
      <tr key={props._id}>
        <td>{props.name}</td>
        <td>{translateQualities(props.qualities)}</td>
        <td>{props.profession.name}</td>
        <td>{props.completedMeetings}</td>
        <td>{props.rate}</td>
        <td>
          <button
            onClick={() => handleDelete({ id: props._id })}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  const usersList = (users) => {
    const elements = users.map((item) => {
      return userItem(item);
    });

    return <tbody>{elements}</tbody>;
  };

  return (
    <React.Fragment>
      <h1>{renderPhrase(countUsers)}</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {usersList(users)}
      </table>
    </React.Fragment>
  );
};

export default Usrs;
