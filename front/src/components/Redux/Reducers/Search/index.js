// reducer = function qui retourn le state
const defaultState = {
  userValue: 'userValue',
};

const searchReducers = (state = defaultState, action) => {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, userValue: action.payLoad };
    default:
      return state;
  }
};

export default searchReducers;
