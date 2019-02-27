/* eslint-disable func-names */
// Category partners

export const savedCategoryAction = Category => ({
  type: 'CATEGORY',
  payLoad: Category,
});

export const savedSearchAction = Search => ({
  type: 'SEARCH',
  payLoad: Search,
});

// Partenaires footer

export const fetchPartners = partners => ({
  type: 'FETCH_PLATINIUM',
  payload: partners,
});


// ambassadors

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
  return fetch('api/ambassadors/ambassadeurs')
    .then(response => response.json())
    .then((data) => {
      dispatch(ambassadorsSucces(data.results));
    })
    .catch((err) => {
      dispatch(ambassadorsFail(err));
    });
};
