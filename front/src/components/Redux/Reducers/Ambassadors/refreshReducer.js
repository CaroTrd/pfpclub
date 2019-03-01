export default function refreshReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO_SUCCES':
      return [
        ...state,
        ...action.payload,
      ];
    default:
      return state;
  }
}
