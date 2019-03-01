// reducer = function qui retourn le state
const defaultState = {
  category: 'all',
};

const categoryReducers = (state = defaultState, action) => {
  switch (action.type) {
    case 'CATEGORY':
      return { ...state, category: action.payLoad };
    default:
      return state;
  }
};

export default categoryReducers;
