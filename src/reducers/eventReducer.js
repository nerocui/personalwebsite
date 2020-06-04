

const initialState = {
    items: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_EVENTS':
            return Object.assign({}, state, { items: action.payload });
        default:
			return state;
	}
};