import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import yodlrApi from "./api/api";
import { first } from "underscore";

function Admin() {

const [users, setUsers] = useState([]);

useEffect(function getAllUserOnMount() {
    console.debug("UserList useEffect getAllUserOnMount");
    getUsers();
  }, []);
  
  async function getUsers() {
    let users = await yodlrApi.getAllUsers();
    setUsers(users);
  }

  console.log(users)

    return (
        <div>
            { users.map(u => (
                <UserCard 
                    firstName={u.firstName}
                    lastName={u.lastName}
                    id={u.id}
                    state={u.state}
                    email={u.email}
                />
            )) }
        </div>
  );
}

export default Admin;