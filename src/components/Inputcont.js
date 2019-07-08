import React from 'react';
import './../../styles/components/inputcont.css';
import currency from './../../public/images/currency.png'
import './../../public/fonts/fontawesome-free-5.8.2-web/css/all.css';
import FilesDemo from './InputFileComponent';
import { SingleDatePicker } from 'react-dates';
import './../../styles/components/react-dates.css';
import 'react-dates/initialize';
import moment from 'moment';
import InputNumber from 'rc-input-number';

export default class Inputcont extends React.Component {
					constructor(props) {
						super(props);
						this.state = {
							text: '',
							attachreceipt: false,
							onclickupload: '',
							onclicksubmitclaim: false,
							name: '',
							email: '',
							createdAt: moment(),
							calFocussed: false,
							amount: 0
						};
					}

					entername = e => {
						this.setState({
							name: e.target.value,
						});
					};

					enteremail = e => {
						
						this.setState({
							email: e.target.value,
						});
					};

					textentered = e => {
						this.setState({
							text: e.target.value,
						});
					};

					// fileupload = e => {
					// 	console.log('fileupload:-' + e.target.value);
					// 	e.target.value.length > 0 &&
					// 		this.setState({
					// 			attachreceipt: true,
					// 		});
					// };

					// receiptupload = () => {
					// 	this.state.attachreceipt
					// 		? alert('RECEIPT UPLOADED SUCCESSFULLY')
					// 		: alert('PLEASE UPLOAD A VALID RECEIPT');
					// };
					inputamount=(value)=>{
						console.log(isNaN(value));
						if (isNaN(value)) {
							alert('PLEASE ENTER A VALID AMOUNT IN INR')
						} else {
							this.setState({
								amount: value
							})
						}
					}

					submitclaim = e => {
						e.preventDefault();
						if (this.state.text.length > 0 && this.state.name.length > 0 && this.state.email.length > 0) {
							alert('CLAIM SUBMITTED SUCCESSFULLY');
							this.setState({
								text: '',
							});
							this.setState({
							  name: '',
							});
							this.setState({
								email: '',
							});
						} else {
							alert('PLEASE FILL ALL THE FIELDS');
							this.onclicksubmitclaim = false;
						}
					};

					render() {
						return (
							<div className="inputcont">
								<form
									className="submitForm"
									// action=""
									// method="post"
									// enctype="multipart/form-data"
									// onSubmit={this.submitclaim}
								>
									<div class="currency" />

									<div class="forminputs">
										<input
											value={this.state.name}
											placeholder="Your Name"
											onChange={this.entername}
											class="nameInp"
										/>
										<input
											type="email"
											value={this.state.email}
											placeholder="Your Email"
											onChange={this.enteremail}
											class="nameInp"
										/>
										<textarea
											style={{marginBottom: '3vh'}}
											placeholder="Claim Description/Remarks"
											onChange={this.textentered}
											value={this.state.text}
											class="nameInp"
										/>

										<SingleDatePicker
											date={this.state.createdAt}
											onDateChange={createdAt => {
												createdAt && this.setState({ createdAt });
											}}
											focused={this.state.calFocussed}
											onFocusChange={({ focused }) => {
												this.setState({ calFocussed: focused });
											}}
											numberOfMonths={1}
											isOutsideRange={() => false}
										/>

										<InputNumber 
										style={{width:'50vw',marginTop: '3vh'}} 
										placeholder={'Enter Amount in INR'}
										onChange={this.inputamount}
										value={this.state.amount}
										/>

										<FilesDemo />
										<button
											class="submitClaimBtn"
											onClick={this.submitclaim}
										>
											Submit Claim
										</button>
									</div>
								</form>
							</div>
						);
					}
				}
