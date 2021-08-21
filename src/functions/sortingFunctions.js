export const sortByFirstName = (first, second) => {
  const firstName = removeTitleFromName(first.name);
  const secondName = removeTitleFromName(second.name);
  return firstName.localeCompare(secondName, 'en', {sensitivity: 'base', ignorePunctuation: true});
}

export const sortByLastName = (first, second) => {
  const firstLastName = first.name.split(" ").slice(first.name.split(" ").length - 1)[0];
  const secondLastName = second.name.split(" ").slice(second.name.split(" ").length - 1)[0];
  return firstLastName.localeCompare(secondLastName, 'en', {sensitivity: 'base', ignorePunctuation: true});
}

export const sortByUserName = (first, second) => {
  return first.username.localeCompare(second.username, 'en', {sensitivity: 'base', ignorePunctuation: true});
}

export const sortByEmail = (first, second) => {
  return first.email.localeCompare(second.email, 'en', {sensitivity: 'base', ignorePunctuation: true});
}

// removes Mr, Mrs, Ms, and Miss so that they aren't part of name comparison
export const removeTitleFromName = (name) => {
  if (
    /^(mr(\.|\s){1})/.test(name.toLowerCase()) || 
    /^(mrs(\.|\s){1})/.test(name.toLowerCase()) || 
    /^(ms(\.|\s){1})/.test(name.toLowerCase()) || 
    /^(miss(\.|\s){1})/.test(name.toLowerCase())
  ){
    return name.split(" ").slice(1).join(" ");
  }
  else return name;
}