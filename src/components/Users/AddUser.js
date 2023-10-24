import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = ({ onAddContact }) => {
  const initialUserInput = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  };

  const [enteredContact, setEnteredContact] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredContact.firstName.trim().length > 0 && enteredContact.lastName.trim().length > 0) {
      onAddContact(enteredContact);
      console.log(enteredContact);
      setEnteredContact(initialUserInput);
    }
  };

  const inputChangeHandler = (id, value) => {
    setEnteredContact((prevInput) => {
      return {
        ...prevInput,
        [id]: value,
      };
    });
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={submitHandler} className={classes.input}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" type="text" value={enteredContact.firstName} onChange={(e) => inputChangeHandler("firstName", e.target.value)}></input>
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" type="text" value={enteredContact.lastName} onChange={(e) => inputChangeHandler("lastName", e.target.value)}></input>
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={enteredContact.phone} onChange={(e) => inputChangeHandler("phone", e.target.value)}></input>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={enteredContact.email} onChange={(e) => inputChangeHandler("email", e.target.value)}></input>
        <Button type="submit" onClick={submitHandler}>
          Add Contact{" "}
        </Button>
      </form>
    </Card>
  );
};
export default AddUser;
