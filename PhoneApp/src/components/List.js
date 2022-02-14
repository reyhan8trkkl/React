import React, { Component } from "react";
import "./List.css";
import PropTypes from "prop-types";

export default class List extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
  };
  state = { filterText: "" };
  render() {
    const onChangeFilter = (e) => {
      this.setState({ filterText: e.target.value });
    };
    const filteredContacts = this.props.contacts.filter((item) => {
      return (
        item.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !==
          -1 ||
        item.phone
          .toLowerCase()
          .indexOf(this.state.filterText.toLowerCase()) !== -1
      );
    });
    return (
      <div>
        <input
          onChange={onChangeFilter}
          value={this.state.filterText}
          className="filter-input"
          name="filter"
          id="filter"
          placeholder="Filter by name or phone"
        ></input>
        <ul className="listField">
          {filteredContacts.map((item, i) => {
            return (
              <li key={i}>
                <span className="name">{item.name}</span>
                <span className="phone">{item.phone}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
