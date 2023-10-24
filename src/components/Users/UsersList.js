import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = ({ users }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.firstName}>
              {user.firstName} {user.lastName}, phone: {user.phone}, email: {user.email}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
export default UsersList;
