import React, { Component } from 'react';
	
    import axios from "axios";

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: {
				username:"",
				email: "",
				password: ""
			}
		};
	}

	handleSubmit = (event) => {
		alert(this.state.activeItem.email);
		//console.log("cred = ")
		//console.log(cred)
		var data = {
			username: this.state.activeItem.username,
			email: this.state.activeItem.email,
			password: this.state.activeItem.password
		}
		axios
			.post("http://localhost:8000/api/register/", data)
			.then(res => {
				alert("registered");
				console.log("response = ",res);
			})
			.catch(err => {
				alert("alert in register");
			})
	};
		

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
	                <h3>Sign Up</h3>
	                <br/>
	                <div className="form-group">
	                    <label>Username</label>
	                    <input type="text" className="form-control" placeholder="Enter username"
	                    	name="username"
	                    	value={this.state.activeItem.username}
	                    	onChange={this.handleChange}
	                    />
	                </div>
	                <br/>
	                <div className="form-group">
	                    <label>Email address</label>
	                    <input type="email" className="form-control" placeholder="Enter email"
	                    	name="email"
	                    	value={this.state.activeItem.email}
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
            	<div className="text-capitalize" id="opstatus">
            		Pending
            	</div>
			</div>
		);
	}
}

export default Register;