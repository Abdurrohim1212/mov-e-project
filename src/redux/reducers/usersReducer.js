const initialState = {
	signup: null,
	signIn: null,
	jwtToken: '',
}

const usersReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case 'POST_SIGNUP':
			return {
				...state,
				signup: payload,
			}
		case 'POST_SIGNIN':
			return {
				...state,
				signup: payload,
			}
		case 'SET_TOKEN':
			return {
				...state,
				jwtToken: payload,
			}
		default:
			return state
	}
}

export default usersReducer
