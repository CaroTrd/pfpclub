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
