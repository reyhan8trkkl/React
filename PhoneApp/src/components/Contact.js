import React, { Component } from "react";
import Form from "./Form";
import List from "./List";

export default class Contact extends Component {
  state = {
    contacts: [
      { name: "Name1", phone: "+129344398439" },
      { name: "Name2", phone: "+12934439844" },
      { name: "Name3", phone: "+129344398433" },
      { name: "Name4", phone: "+129344398477" },
    ],
    age: 12,
    surname: "Tommy",
    order: "98",
    id: 1,
  };
  render() {
    const addContact = (data) => {
      const {contacts}=this.state
      console.log(contacts)
      contacts.push(data)
      console.log(contacts)
     
      this.setState({contacts:contacts });
      
    };
    const chgnState = (e) => {
      e.preventDefault();
      this.setState({ age: 21 });
    };
    return (
      <div>
        <List contacts={this.state.contacts} />
        <Form addContact={addContact} />
        <button
          style={{
            position: "absolute",
            left: "50%",
            top: "105%",
            transform: "translate(-50%, -50%)",
          }}
          onClick={chgnState}
        >
          Change state
        </button>
      </div>
    );
  }
}
