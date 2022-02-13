import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      authorized: false,
      isEditing: true,
      counter: 3,
    };
    this.authorize = this.authorize.bind(this);
  }

  enableInput() {
    window.alert(
      "You entered third time wrong, please try again after 30 seconds"
    );
    setTimeout(() => this.setState({ isEditing: true, counter:0 }), 30000);
  }

  authorize() {
    const input = document.querySelector(".form-control");
    if (this.props.user.password === input.value) {
      this.setState({ authorized: true });
    } else {
      window.alert("You entered wrong password");
      this.setState({ counter: this.state.counter - 1 });
      console.log(this.state.counter);
      if (this.state.counter === 0) {
        console.log("tmm");
        this.setState({ isEditing: false });
        this.enableInput();
      }
    }
  }

  render() {
    let login = (
      <div className="card">
        <form className="form-inline" action="#" onSubmit={this.authorize}>
          <div className="form-group">
            <input
              type="password"
              className="form-control mx-sm-3"
              placeholder="Password"
              //disabled={this.state.counter === 0 ? true : false}
              disabled={!this.state.isEditing}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );

    let contact = (
      <div className="card">
        <div className="top">
          <h2 className="name">{this.props.user.name}</h2>
          <img
            className="circle-img"
            src={this.props.user.imgURL}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p className="info">{this.props.user.phone}</p>
          <p className="info">{this.props.user.mail}</p>
        </div>
      </div>
    );

    return (
      <div id="authorization">
        <h1>
          {this.state.authorized ? "Contact Profile" : "Enter the Password"}
        </h1>
        {this.state.authorized ? contact : login}
      </div>
    );
  }
}

export default Login;
