import React, { Component } from 'react';
	
    import axios from "axios";

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: {
				username: "",
				password: ""
			}
		};
	}

	handleSubmit = (event) => {
		alert(this.state.activeItem.username)
		//console.log("cred = ")
		//console.log(cred)
		var data = {
			username: this.state.activeItem.username,
			password: this.state.activeItem.password
		}
		axios
			.post("http://localhost:8000/api/login/", data)
			.then(function(response) {
				alert("hello login");
				console.log("response = ",response);
			})
			.catch(function(error) {
				alert("alert in login");
				console.log(error);
			});
	}

	handleChange = e => {
		let { name, value } = e.target;
		const activeItem = { ...this.state.activeItem, [name]: value };
		this.setState({ activeItem });
		//console.log(this.state.activeItem)
	};

	render() {
		return (
			<div>
				<form align='center' onSubmit={this.handleSubmit}>
	                <h3>Sign In</h3>
	                <br/>
	                <div className="form-group">
	                    <label>Username</label>
	                    <input type="text" className="form-control" placeholder="Enter username"
	                    	name="username"
	                    	value={this.state.activeItem.email_id}
	                    	onChange={this.handleChange}
	                    />
	                </div>
	                <br/>
	                <div className="form-group">
	                    <label>Password</label>
	                    <input type="password" className="form-control" placeholder="Enter password"
	                    	name="password"
	                    	value={this.state.activeItem.password}
	                    	onChange={this.handleChange}
	                    />
	                </div>
	                <br/>
	                <input type="submit" value="Submit" className="btn btn-primary btn-block"/>
            	</form>
			</div>
		);
	}
}

export default Login;