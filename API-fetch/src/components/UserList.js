import React, { Component } from "react";

export default class UserList extends Component {
  state = { users: [], isLoading: true, todoCount: "" };

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          this.setState({ users: data, isLoading: false });
        }, 2000);
      });
  }
  getTodoList = () => {
    fetch("http://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => this.setState({ todoCount: data.length }));
  };

  render() {
    const { users, isLoading, todoCount } = this.state;
    return (
      <div>
        {isLoading === true
          ? "Loading...."
          : users.map((item) => (
              <div key={item.id}>
                {item.id}.{item.name}
              </div>
            ))}
        <hr />
        To Do List:{todoCount}
        <br />
        <button onClick={this.getTodoList}>GET TO DO LIST</button>
      </div>
    );
  }
}
