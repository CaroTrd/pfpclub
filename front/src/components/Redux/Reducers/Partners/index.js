const initialState = [];
export default function partnerReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PLATINIUM':
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
}
