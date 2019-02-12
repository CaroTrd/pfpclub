export const saveAmbassadors = info => (
  {
    type: 'SAVEAMB',
    payload: info,
  }
);

export const envoiId = element => ({
  type: 'ENVOI',
  payload: element,
}
);
