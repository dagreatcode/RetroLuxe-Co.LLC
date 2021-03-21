import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <>
        <h1>Login</h1>
        <form className="container">
          <div className="mb-3 row">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputPassword" className="col-form-label">
              Password
            </label>
            <div className="col-sm-12">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">
              Login
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
