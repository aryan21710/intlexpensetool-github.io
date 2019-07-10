

const variables = {
	text: '',
	name: '',
	email: '',
	createdAt: '',
	amount: 0,
}
export default (state = variables, action) => {
	switch (action.type) {
		case 'USER_LOGIN':
			console.log('USER LOGIN REDUCER');
			return Object.assign({},action.logininfo)

		case 'SUBMIT_CLAIM':
			console.log('SUBMIT CLAIM REDUCER:-');

			return Object.assign({},action.variables)

		default:
			return state;
	}
};
