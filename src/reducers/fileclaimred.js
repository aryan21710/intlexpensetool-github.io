

const variables = [];
export default (state = variables, action) => {
	switch (action.type) {
		case 'USER_LOGIN':
			console.log('USER LOGIN REDUCER');
			return [...state, action.email, action.passwd];

		case 'SUBMIT_CLAIM':
			console.log('SUBMIT CLAIM REDUCER:-');
			return state.filter(exp => exp.id != action.id);

		default:
			return state;
	}
};
