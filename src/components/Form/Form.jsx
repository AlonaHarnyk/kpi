import { addUser } from "../../redux/users/operations";
import { useDispatch } from "react-redux";
export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newUser = {
      name: form.elements.name.value,
      age: form.elements.age.value
    };
    dispatch(addUser(newUser));
    form.reset()
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Age:
        <input type="number" name="age" />
      </label>
      <button>Add user</button>
    </form>
  );
};
