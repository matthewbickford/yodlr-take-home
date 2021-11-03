import React from "react";
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";

function Navigation({ users }) {
    return (
        <nav className="Navigation navbar navbar-expand-md">
            <Link className="navbar-brand" to="/">
                Yodlr
            </Link>
            <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/signup">
              Registraion Page
            </NavLink>
          </li>
          <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/admin">
              Admin Page
            </NavLink>
          </li>
        </ul>
        </nav>
    )
}

export default Navigation;