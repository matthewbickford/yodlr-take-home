import React from "react";
import "./UserCard.css"

function UserCard({id, email, firstName, lastName, state }) {
    return (
      <div className="JobCard card">
          <div className="card-body">
            <h6 className="card-title">{firstName} {lastName}</h6>
            <div><small>ID: {id}</small></div>
            <div><small>Email: {email}</small></div>
            <div><small>State: {state}</small></div>
          </div>
      </div>
    )
}

export default UserCard;