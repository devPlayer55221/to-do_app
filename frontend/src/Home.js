import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";


class Home extends Component {
	
	// componentDidMount() {
 //      	this.refreshList();
 //      }
 //    refreshList = () => {
 //      	axios
 //      		.get("http://localhost:8000/api/todos/")
 //      		.then(res => this.setState({ todoList: res.data }))
 //      		.catch(err => console.log(err));
 //      };

	render() {
		return (<Router>
			<div className="Home">
			            <nav className="navbar navbar-light bg-light">
        			<div className="container">
			            <ul className="navbar-nav mr-auto">
			              <li className="nav-item">
			                <Link className="nav-link" to={"/login"}>Login</Link>
			              </li>
			              <li className="nav-item">
			                <Link className="nav-link" to={"/register"}>Register</Link>
			              </li>
			            </ul>
		            </div>
					</nav>
		     			   		
          				<Switch>
          					<Route path="/register" component={Register} />
          					<Route path="/login" component={Login} />
          					<Route path="/" component={Login} />
          					
          				</Switch>
          			
			</div></Router>
		);
	};
}

export default Home;