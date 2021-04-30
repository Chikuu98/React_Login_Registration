import React, { Component } from 'react';
import './loginStyles.css';
class login extends Component {
    render() {
        return (
            <div className="login-parent">
                <div className="login-name">
                    <h1 className="title-login"><p>LOG IN</p>Here</h1>
                </div>
                <div className="login-form">
                <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
       
        <button type="submit" className="btn submin-button">Log In</button>
      </form>
                </div>
            </div>
        );
    }
}

export default login;
