import React, { Component } from 'react';
	
    import axios from "axios";
    import Home from "./../Home";

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: {
				email_id: "",
				password: ""
			}
		};
	}

	handleSubmit = (event) => {
		alert(this.state.activeItem.email_id)
		console.log("cred = ")
		//console.log(cred)
		var data = {
			email_id: this.state.activeItem.email_id,
			password: this.state.activeItem.password
		}
		axios
			.post("http://localhost:8000/api/users/", data)
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

	                <div className="form-group">
	                    <label>Email address</label>
	                    <input type="email" className="form-control" placeholder="Enter email"
	                    	name="email_id"
	                    	value={this.state.activeItem.email_id}
	                    	onChange={this.handleChange}
	                    />
	                </div>

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

export default Register;