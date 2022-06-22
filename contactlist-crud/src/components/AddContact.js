import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
  };
  addContact = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="ui main" style={{ marginTop: "35px" }}>
        <div className="ui centered two column row grid">
          <div className="column">
            <div className="row">
              <h2 style={{ marginBottom: "35px" }}>Add Contact</h2>
              <form className="ui form" onSubmit={this.addContact}>
                <div className="field">
                  <label style={{ marginBottom: "10px" }}>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter the name"
                    value={this.state.name}
                    onChange={(e) => {
                      this.setState({ name: e.target.value });
                    }}
                  />
                </div>
                <div className="field">
                  <label style={{ marginBottom: "10px" }}>Email</label>
                  <input
                    type="text"
                    name="email"
                    style={{ marginBottom: "10px" }}
                    placeholder="Enter the email"
                    value={this.state.email}
                    onChange={(e) => {
                      this.setState({ email: e.target.value });
                    }}
                  />
                </div>
                <div className="center-div">
                  <Link to="/">
                    <button
                      className="ui icon left labeled blue inverted button"
                      style={{ marginRight: "10px" }}
                    >
                      <i
                        aria-hidden="true"
                        className="long arrow alternate left icon"
                      ></i>
                      Back
                    </button>
                  </Link>
                  <button className="ui blue inverted button">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
