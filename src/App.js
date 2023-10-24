import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addContactHandler = (newContact) => {
    setUsersList((prevState) => {
      return [...prevState, newContact];
    });
  };

  return (
    <div>
      <AddUser onAddContact={addContactHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
