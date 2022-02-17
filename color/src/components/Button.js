import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button
        className={this.props.isLight ? "dark-button" : "light-button"}
        onClick={this.props.oclick}
      >
        VLADIMIR
        {this.props.children}
      </button>
    );
  }
}

export { Button };
//export default Button;
