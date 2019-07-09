

export const userlogin = (email,passwd) => {
	// console.log('USERLOGIN ACTION:-'+this.email+':'+this.passwd);
	return ({
			type: 'USER_LOGIN',
			email,
			passwd,	
		});
	}

export const submitclaim = 
({email='',passwd='',text='',attachreceipt=false,onclickupload=false,onclicksubmitclaim=false}={}) => {
    console.log('id:-' + id);
    return {
		type: 'SUBMIT_CLAIM',
		variables: {
			name,
			email,
			passwd,
			text,
			attachreceipt,
			onclickupload,
			onclicksubmitclaim,
			createdAt,
			amount
		},
	};
}





