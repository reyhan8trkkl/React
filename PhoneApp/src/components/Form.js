import React, { Component } from "react";

export default class Form extends Component {
  state = { name: "", phone: "" };

  render() {
    const onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };
    const formInputStyle = {
      borderColor: "rebeccapurple",
      marginTop: "10px",
      height: "40px",
      lineHeight: "25px",
      width: "400px",
      textIndent: "10px",
    };
    const onSubmit = (e) => {
      e.preventDefault();
     if (this.state.name==="") {
       alert("Name can't be blank!")
     } else {
      this.props.addContact({ ...this.state });
      this.setState({name:"",phone:""})
     }
      
    };
    return (
      <div>
        <form
          onSubmit={onSubmit}
          style={{ width: "400px", margin: "0 auto", padding: "0" }}
        >
          <input
            style={formInputStyle}
            name="name"
            id="name"
            placeholder="Enter a name"
            value={this.state.name}
            onChange={onChange}
          ></input>
          <br />
          <input
            style={formInputStyle}
            name="phone"
            id="phone"
            placeholder="Enter a phone"
            value={this.state.phone}
            onChange={onChange}
          ></input>
          <button
            type="submit" /*onClick={this.props.addContact}*/
            style={{ color: "maroon", margin: "10px 160px", width: "20%" }}
          >
            <b>Add</b>
          </button>
        </form>
      </div>
    );
  }
}
