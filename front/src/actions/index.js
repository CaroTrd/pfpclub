export const envoiId = element => ({
  type: 'ENVOI',
  payload: element,
}
);

export const ambassadorsStart = () => ({
  type: 'ADD_TODO_STARTED',
});

export const ambassadorsSucces = ambassadorList => ({
  type: 'ADD_TODO_SUCCES',
  payload: ambassadorList,
});

export const ambassadorsFail = err => ({
  type: 'ADD_TODO_FAILURE',
  payload: {
    err,
  },
});

export const getAmbassador = () => (dispatch) => {
  dispatch(ambassadorsStart());
  return fetch('/ambassadors')
    .then(response => response.json())
    .then((data) => {
      dispatch(ambassadorsSucces(data.results));
    })
    .catch((err) => {
      dispatch(ambassadorsFail(err));
    });
};
