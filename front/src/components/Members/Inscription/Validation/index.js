/* eslint-disable camelcase */
const validate = (values) => {
  const {
    firstname, lastname, birthdate, email, phone, address, city,
    municipality, zipcode, country, name, manager, vatnumbr, e_mail,
    phone_comp, address_comp, city_comp, municipality_comp, zipcode_comp, country_comp, website,
    namecontact, phonecontact, emailcontact,
  } = values;
  const errors = {};
  if (!firstname || firstname.trim() === '') {
    errors.firstname = 'Champ exigé';
  } else if (!/^([a-zA-Zéèêëàâîïôöûü-].{1,102})$/gi.test(firstname)) {
    errors.firstname = 'Prénom incorrect';
  }
  if (!lastname || lastname.trim() === '') {
    errors.lastname = 'Champ exigé';
  } else if (!/^([a-zA-Zéèêëàâîïôöûü-].{1,102})$/gi.test(lastname)) {
    errors.lastname = 'Nom incorrect';
  }
  if (!birthdate) {
    errors.birthdate = 'Champ exigée';
  } else if (birthdate.length < 10) {
    errors.birthdate = 'Date incorrecte';
  }
  if (!email || email.trim() === '') {
    errors.email = 'Champ exigé ';
  } else if (!/^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/gi.test(email)) {
    errors.email = 'E-mail incorrect';
  }
  if (!phone || phone.trim() === '') {
    errors.phone = 'Champ exigé';
  } else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/gi.test(phone)) {
    errors.phone = 'Numéro incorrect';
  }
  if (!address || address.trim() === '') {
    errors.address = 'Champ exigé';
  } else if (!/^[0-9]{1,3}(?:(?:[,. ]?){1}[-a-zA-Zàâäéèêëïîôöùûüç])+$/i.test(address)) {
    errors.address = 'Adresse incorrecte';
  }
  if (!city || city.trim() === '') {
    errors.city = 'Champ exigé';
  } else if (!/^[a-zA-Zéèêëàâîïôöûü-]+$/i.test(city)) {
    errors.city = 'Ville incorrecte';
  }
  if (!municipality || municipality.trim() === '') {
    errors.municipality = 'Champ exigé';
  } else if (!/^[a-zA-Zàâäéèêëïîôöùûüç-]{1,60}$/i.test(municipality)) {
    errors.municipality = 'Commune incorrecte';
  }
  if (!zipcode || zipcode.trim() === '') {
    errors.zipcode = 'Champ exigé';
  } else if (!/^[0-9]{4}$/i.test(zipcode)) {
    errors.zipcode = 'Code postale incorrect';
  }
  if (!country || country.trim() === '') {
    errors.country = 'Champ exigé';
  } else if (!/^[a-zA-Zàâäéèêëïîôöùûüç-]{1,40}$/i.test(country)) {
    errors.country = 'Pays incorrect';
  }
  if (!/^([a-zA-Z0-9 ].{1,20}){0,}$/gi.test(name)) {
    errors.name = 'Nom incorrect';
  }
  if (!/^([a-zA-Zéèêëàâîïôöûü-].{1,50})$/gi.test(manager)) {
    errors.manager = 'Nom incorrect';
  }
  if (!/^(BE).?0[0-9]{9}$/gi.test(vatnumbr)) {
    errors.vatnumbr = 'Veuillez rentrer un numéro de TVA valide s\'il vous plaît';
  }
  if (!/^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e_mail)) {
    errors.e_mail = 'Veuillez rentrer une adresse e-mail valide s\'il vous plaît';
  }
  if (!/^(\+\d{1,3}[- ]?)?\d{9,10}$/gi.test(phone_comp)) {
    errors.phone_comp = 'Veuillez rentrer un numéro valide s\'il vous plaît';
  }
  if (!/^[0-9]{1,3}(?:(?:[,. ]?){1}[-a-zA-Zàâäéèêëïîôöùûüç])+$/gi.test(address_comp)) {
    errors.address_comp = 'Veuillez rentrer une adresse valide s\'il vous plaît';
  }
  if (!/^[a-zA-Zéèêëàâîïôöûü-]+$/gi.test(city_comp)) {
    errors.city_comp = 'Veuillez rentrer un nom de ville valide s\'il vous plaît';
  }
  if (!/^[a-zA-Zàâäéèêëïîôöùûüç-]{1,60}$/gi.test(municipality_comp)) {
    errors.municipality_comp = 'Veuillez rentrer un nom valide s\'il vous plaît';
  }
  if (!/^[0-9]{4}$/gi.test(zipcode_comp)) {
    errors.zipcode_comp = 'Veuillez rentrer un code postale valide s\'il vous plaît';
  }
  if (!/^[a-zA-Zàâäéèêëïîôöùûüç-]{1,40}$/gi.test(country_comp)) {
    errors.country_comp = 'Veuillez rentrer un nom valide s\'il vous plaît';
  }
  if (!/^(https?:\/\/|www.)[\w-_./?=&]+$/gi.test(website)) {
    errors.website = 'URL incorrect';
  }
  if (!namecontact || namecontact.trim() === '') {
    errors.namecontact = 'Champ exigé';
  } else if (!/^([a-zA-Zéèêëàâîïôöûü-].{1,102})$/gi.test(namecontact)) {
    errors.namecontact = 'Prénom incorrect';
  }
  if (!phonecontact || phonecontact.trim() === '') {
    errors.phonecontact = 'Champ exigé';
  } else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/gi.test(phonecontact)) {
    errors.phonecontact = 'Numéro incorrect';
  }
  if (!emailcontact || emailcontact.trim() === '') {
    errors.emailcontact = 'Champ exigé ';
  } else if (!/^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/gi.test(emailcontact)) {
    errors.emailcontact = 'E-mail incorrect';
  }
  return errors;
};


export default validate;
