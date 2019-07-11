import React from 'react';
import './../../styles/components/inputcont.css';
import currency from './../../public/images/currency.png';
import './../../public/fonts/fontawesome-free-5.8.2-web/css/all.css';
import FilesDemo from './InputFileComponent';
import { SingleDatePicker } from 'react-dates';
import './../../styles/components/react-dates.css';
import 'react-dates/initialize';
import moment from 'moment';
import {submitclaim} from './../action/fileclaim'
import {connect} from 'react-redux';

class Inputcont extends React.Component {
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
			amount: 0,
		};
	}

	entername = e => {
		this.setState({
			name: e.target.value,
		});
	};

	enteremail = e => {
		console.log(e.target.value.match(/^([a-zA-Z0-9]+)(@)+([a-zA-Z0-9]+)(\.com)$/g));
		if (e.target.value.match(/^([a-zA-Z0-9]+)(@)+([a-zA-Z0-9]+)(\.com)$/g) != 'null') {
			this.setState({
				email: e.target.value,
			});
		} else {
			alert('ENTER A VALID EMAIL ID');
		}
	};

	validateemail=(e)=>{
		if (this.state.email.match(/^([a-zA-Z0-9]+)(@)+([a-zA-Z0-9]+)(\.com)$/g) == null) {
				alert('ENTER A VALID EMAIL ID');
				console.log('ENTER A VALID EMAIL ID');
			} else {
				console.log('A VALID EMAIL ID');
			}
			
	}

	textentered = e => {
		this.setState({
			text: e.target.value,
		});
	};

	inputamount = e => {
	
			this.setState({
				amount: e.target.value,
			});
	}
	

	submitclaim = e => {
		e.preventDefault();
	 
		if (
			this.state.text.length > 0 &&
			this.state.name.length > 0 &&
			this.state.email.length > 0 && 
			this.state.amount > 0
		) 
		{
			if (this.state.email.match(/^([a-zA-Z0-9]+)(@)+([a-zA-Z0-9]+)(\.com)$/g) == null) {
				alert('ENTER A VALID EMAIL ID');
			} else {
				console.log('A VALID EMAIL ID');
				alert('CLAIM SUBMITTED SUCCESSFULLY ');
				console.log('PROPS:-'+JSON.stringify(this.props))
				
				this.props.dispatch(submitclaim({
					text: this.state.text,
					name: this.state.name,
					email:  this.state.email,
					amount: this.state.amount,
					createdAt: this.state.createdAt.format('LL')

				}))
				this.setState({
					text: '',
				});
				this.setState({
					name: '',
				});
				this.setState({
					email: '',
				});
			}
			
	    } else {
			alert('PLEASE FILL ALL THE FIELDS AND AMOUNT SHOULD BE MORE THAN 0');
			this.onclicksubmitclaim = false;
		}


	};

	render() {
		return (
			<div className="inputcont">
				<div className="submitForm">
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
							onBlur={this.validateemail}
						/>
						<textarea
							style={{ marginBottom: '3vh' }}
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

						<input 
						type="number" 
						name="amount" 
						min="1"
						style={{ width: '50vw', marginTop: '3vh' }}
						placeholder={'Enter Amount in INR'}
						onChange={this.inputamount}
						value={this.state.amount}
						/>
				

						<FilesDemo receiptstatus={this.state.attachreceipt}/>
						<button class="submitClaimBtn" onClick={this.submitclaim}>
							Submit Claim
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default connect()(Inputcont)
