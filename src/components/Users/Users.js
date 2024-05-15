import { useSelector, useDispatch } from "react-redux";
import { selectUsers } from "../../redux/users/selectors";
import { deleteUser } from "../../redux/users/usersSlice.js";
import Avatar from "react-avatar";

export const Users = () => {
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  return (
    <ul>
      {users.map(({ name, age, id, status }) => (
        <li key={id}>
          <Avatar name={name} round={true} size="40" />
          <h2>{name}</h2>
          <p>Age: {age}</p>
          <p>Status: {status}</p>
          <button onClick={() => dispatch(deleteUser(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
