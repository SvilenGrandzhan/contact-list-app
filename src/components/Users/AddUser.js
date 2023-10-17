import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className={classes.input}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" type="text"></input>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" type="text"></input>
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></input>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email"></input>
        <button type="submit">Add Contact</button>
      </form>
    </Card>
  );
};
export default AddUser;
