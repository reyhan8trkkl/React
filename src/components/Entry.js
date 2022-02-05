import React, { Component } from "react";

export default class Entry extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="term">
        {this.props.data.map((element) => {
          return (
    <>
              {console.log(element.emoji)}
              <div className="dt">
                <span>{element.emoji} <br/></span>
                <span> {element.name}</span>
              </div>
              <div className="dd">
                <span>{element.meaning}</span>
              </div>
            </>
          );
        })}
      </div>
    );
  }
}
