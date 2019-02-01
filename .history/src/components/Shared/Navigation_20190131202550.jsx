import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Navigation extends Component {
 

  isLoggedIn() {
    return sessionStorage.getItem("isLoggedin") === "true";
  }

  componentDidUpdate() {}
  render() {
    if (!this.isLoggedIn()) {
      return null;
    }

    return <div className="container ">
        <div className="row well">
          <div className="col-md-2">
            <NavLink activeClassName="active" to="/welcome">
              DashBoard
            </NavLink>
          </div>
          <div className="col-md-2">
          <NavLink activeClassName='active' to="/customers">Customers</NavLink>
          </div>
        </div>
      </div>;
  }
}
export default Navigation;
