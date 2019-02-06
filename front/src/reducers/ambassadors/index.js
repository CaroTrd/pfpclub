const defaultState = ['test'];

const ambassadorsReducers = (state = defaultState, action) => {
  switch (action.type) {
    case 'SAVEAMB':
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
};

export default ambassadorsReducers;
