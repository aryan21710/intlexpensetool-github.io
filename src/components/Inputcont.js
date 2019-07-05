import React from 'react';
import './../../styles/components/inputcont.css';
import currency from './../../public/images/currency.png'
import './../../public/fonts/fontawesome-free-5.8.2-web/css/all.css';

export default class Inputcont extends React.Component {
					constructor(props) {
						super(props);
						this.state = {
							text: '',
							attachreceipt: false,
							onclickupload: '',
							onclicksubmitclaim: false,
						};
					}

					textentered = e => {
						this.setState({
							text: e.target.value,
						});
					};

					fileupload=(e)=>{
						console.log('fileupload:-'+e.target.value);
						(e.target.value.length > 0 && this.setState({
							attachreceipt : true
						}))

					}

					receiptupload = () => {
						this.state.attachreceipt ? 
						alert('RECEIPT UPLOADED SUCCESSFULLY') :
						alert('PLEASE UPLOAD A VALID RECEIPT')
					};

					submitclaim = e => {
						e.preventDefault();
						if (this.state.text.length > 0) {
							alert('CLAIM SUBMITTED SUCCESSFULLY');
							this.setState({
								text: ''
							})
						
						} else {
							alert('CLAIM DESCRIPTION MISSING');
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
									onSubmit={this.submitclaim}
								>
									<div class="currency" />

									<div class="forminputs">
										<textarea
											placeholder="Enter Your Claim"
											onChange={this.textentered}
											value={this.state.text}
										/>
										<div id="fileToUpload">
											<input
												type="file"
												name="fileToUpload"
												onChange={this.fileupload}
												
												
											/>
											<button onClick={this.receiptupload}>
												Upload Receipt
											</button>
										</div>
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
