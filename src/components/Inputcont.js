import React from 'react';
import './../../styles/components/inputcont.css';
import currency from './../../public/images/currency.png'
import './../../public/fonts/fontawesome-free-5.8.2-web/css/all.css';

export default class Inputcont extends React.Component {
	render() {
		return (
			<div className="inputcont">
				<form className="submitForm" action="" method="post" enctype="multipart/form-data">
					<div class="currency" />
					<div class="forminputs">
						<textarea placeholder="Enter Your Claim" />
						<div id="fileToUpload">
							<input type="file" name="fileToUpload" />
							<input type="submit" value="Upload Receipt" name="submit" />
						</div>
						<button class="submitClaimBtn">Submit Claim</button>
					</div>
				</form>
			</div>
		);
	}
}
