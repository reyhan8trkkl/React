import React, { Component } from "react";
import { Route, Link, Routes, Router } from "react-router-dom";
import { data } from "./data";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: "",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
    };
  }
  adding = () => {
    return this.setState({ count: "1" });
  };
  render() {
    return (
      <div className="col-3 col-md-3 col-lg-3 mx-4 mb-5" id="card">
        <div>
          <div className="card p-0 overflow-hidden h-100 shadow">
            <img src={this.props.img} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.desc}</p>
              <p id="deta">
                {this.state.count !== "1" ? "" : this.state.detail}
              </p>
              <nav>
                <button className="btn btn-primary" onClick={this.adding} id="btn">
                  Details
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
