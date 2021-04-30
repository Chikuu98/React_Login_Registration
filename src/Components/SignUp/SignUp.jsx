import React, { Component } from 'react';
import './SignUpStyles.css';
class SignUp extends Component {
    render() {
        return (
            <div className="SignUp-parent">
                <div className="SignUp-name">
                    <h1 className="title-SignUp"><p>Sign Up</p>Here</h1>
                </div>
                <div className="SignUp-form">
                <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputTelephone1">Mobile Number</label>
          <input name="telephone" type="text" className="form-control" id="exampleInputTelephone1" placeholder=" Enter Mobile No.." />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputAddress1">Home Address</label>
          <input name="address" type="text" className="form-control" id="exampleInputAddress1" placeholder="Enter Address" />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputSkill1">Main Skill</label>
          <input name="Skill" type="text" className="form-control" id="exampleInputSkill1" placeholder="Enter your main skill" />
        </div>
       
        <button type="submit" className="btn SignUp-button">Sign Up</button>
      </form>
                </div>
            </div>
        );
    }
}

export default SignUp;
