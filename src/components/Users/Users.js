import { useSelector, useDispatch } from "react-redux";
import { selectUsers } from "../../redux/users/selectors";
import { getUsers, deleteUser } from "../../redux/users/operations";
import { useEffect } from "react";
import Avatar from "react-avatar";

export const Users = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <ul>
      {users.map(({ name, age, id }) => (
        <li key={id}>
          <Avatar name={name} round={true} size="40" />
          <h2>{name}</h2>
          <p>Age: {age}</p>
          <button onClick={() => dispatch(deleteUser(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
