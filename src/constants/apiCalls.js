import axios from 'axios';
export async function fetchAllUsers() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users/').then(res => console.log(res));
  return response;
}