import React, { Component } from "react";
import axios from "axios";

export default class UserList extends Component {
  state = { posts: "" };

  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/posts/1")
      .then((res) => this.setState({ posts: res.data }));
  }
  render() {

    return (
      <div>
     {this.state.posts.title}
    
      </div>
    );
  }
}
