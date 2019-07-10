

export const userlogin = (logininfo) => {
	// console.log('USERLOGIN ACTION:-'+this.email+':'+this.passwd);
	return ({
			type: 'USER_LOGIN',
			logininfo
			
		
		});
	}

export const submitclaim = (variables) => {
    console.log('PROPS REACHED THE ACTION FILE:-'+JSON.stringify(variables))
    return {
		type: 'SUBMIT_CLAIM',
		variables
	};
}





