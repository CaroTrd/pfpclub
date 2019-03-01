const defaultState = {
  hobby_id: '',
};

const sendIdReducers = (state = defaultState, action) => {
  switch (action.type) {
    case 'ENVOI':
      return {
        ...state,
        hobby_id: action.payload,
      };
    default:
      return state;
  }
};

export default sendIdReducers;
