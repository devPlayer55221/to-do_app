import React, { Component } from 'react';
	
    import axios from "axios";

class Login extends Component {

	render() {
		return (
			<div>
				<form align='center'>
	                <h3>Sign In</h3>

	                <div className="form-group">
	                    <label>Email address</label>
	                    <input type="email" className="form-control" placeholder="Enter email" />
	                </div>

	                <div className="form-group">
	                    <label>Password</label>
	                    <input type="password" className="form-control" placeholder="Enter password" />
	                </div>
	                <br/>
	                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            	</form>
			</div>
		);
	}
}

export default Login;