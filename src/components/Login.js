import React from 'react';
import './../../styles/components/login.css';
import axios from 'axios';
import Header from './Header';
import {connect} from 'react-redux';
import {userlogin} from './../action/fileclaim'

 class Login extends React.Component {
					constructor(props) {
						super(props);
						this.state = {
							email: '',
							passwd: '',
							loginStatus: '',
						};
					}

					enteruname = e => {
						// console.log(`E.TARGET.NAME IS CHANGED:- ${e.target.name}`);
						this.setState({
							email: e.target.value,
						});
					};

					enterpasswd = e => {
						// console.log(`E.TARGET.NAME IS CHANGED:- ${e.target.name}`);
						this.setState({
							passwd: e.target.value,
						});
					};

					submitCredentials = e => {
						e.preventDefault();
						axios
							.post(
								'./login',
								{
									user: {
										email: this.state.email,
										passwd: this.state.passwd,
									},
								},

								{ withCredentials: true }
							)
							.then(res => {
								console.log('RESPONSE BACK FROM SERVER:-' + JSON.stringify(res));
								if (this.state.email.length > 0 && this.state.passwd.length > 0) {
									// console.log('THIS.PROPS:-'+JSON.stringify(this.props));
									this.setState({
										loginStatus: 'Logged In',
									});
									this.props.dispatch(userlogin(
										this.state.email,
										this.state.passwd
										// loginStatus: this.state.loginStatus
									));
									if (this.state.email.split('@')[0]==="admin") {
										this.props.history.push('/expensestable');
										} else {
										this.props.history.push('/dashboard');
									}
								}
							})
							.catch(error => {
								console.log('ERROR OCCURED:-' + error);
								alert('USER DOES NOT EXIST. LOGIN WITH A VALID USER');
							});
						
						
						// console.log(JSON.stringify(this.props));
						
					};

					render() {
						return (
								<div className="login">
									<form onSubmit={this.submitCredentials}>
									<p>Login</p>
									<hr />

									<input
										className="uname"
										placeholder="Enter Username"
										type="email"
										name="email"
										value={this.state.email}
										onChange={this.enteruname}
									/>
									<input
										className="passwd"
										placeholder="Enter Password"
										type="password"
										name="passwd"
										value={this.state.passwd}
										onChange={this.enterpasswd}
									/>
									<button className="loginBtn">Login</button>
								</form>

								</div>
						);
					}
				}

export default connect()(Login);