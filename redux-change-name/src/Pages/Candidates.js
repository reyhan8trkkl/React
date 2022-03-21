import React, { Component } from "react";
import { getUsers, setUser } from "../actions/userAction";
import { connect } from "react-redux";

class UserList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const users = this.props.users;

    let sortedusers = "No Users";
    console.log(users);
    if (users) {
      sortedusers = users
        .sort(function (a, b) {
          var nameA = a.name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1; //nameA comes first
          }
          if (nameA > nameB) {
            return 1; // nameB comes first
          }
          return 0; // names must be equal
        })
        .map((user) => {
          return (
            <tr>
              <td style={{ paddingRight: "70px", paddingLeft: "50px" }}>
                {user.name}
              </td>
              <td>{user.phone}</td>
              <td>
                <button onClick={()=>{return console.log(user.id)}}>Details</button>
              </td>
            </tr>
          );
        });
    }
    return (
      <div className="userlist-container">
        <div className="form-container">
          <form >
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
              />
               <button className="btn btn-primary" type="submit">
                Search User
              </button>
            </div>
          </form>
        </div>
        <div className="list-group">
          <table>
            <tr>
              <th style={{ paddingRight: "300px" }}>Name</th>
              <th>Phone</th>
            </tr>
            <td>{sortedusers}</td>
          </table>
        </div>
        <div className="panel panel-default">
          <div className="panel-body"></div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.user.users,
    currentUser: state.user.userId
      ? state.user.users.filter((user) => user.id === state.user.userId)[0]
      : null,
  };
};
export default connect(mapStateToProps, { getUsers, setUser })(UserList);
