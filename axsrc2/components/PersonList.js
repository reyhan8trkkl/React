import React, { Component } from "react";
import axios from "axios";
import api from "../api";

export default class PersonList extends Component {
  state = { persons: [], error:null };
  componentDidMount() {
    api.get("users")
    .then((res) => {
      this.setState({ persons: res.data });
    })
    .catch((err)=>this.setState({error:err}))
  }
  

  render() {
 
    const { persons } = this.state;
    const viewData = (
      <ul>
        {persons.length > 0
          ? persons.map((item) => (
              <li style={{ fontSize: "20px" }} key={item.id}>
                {item.id}.{item.name}
              </li>
            ))
          : "No data..."}
      </ul>
    );
    return <div>

        {this.state.error === null ? viewData : "Error in API Call"}
    </div>;
  }
}
