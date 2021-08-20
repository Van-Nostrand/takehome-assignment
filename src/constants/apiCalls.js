import axios from 'axios';

const ROOT_URL = 'https://jsonplaceholder.typicode.com';

export function fetchAllUsers() {
  return fetch(`${ROOT_URL}/users`).then(res => res.json());
}

export function fetchAllPosts() {
  return fetch(`${ROOT_URL}/posts`).then(res => res.json());
}

export function fetchAllAlbums() {
  return fetch(`${ROOT_URL}/albums`).then(res => res.json());
}

export function fetchAllComments() {
  return fetch(`${ROOT_URL}/comments`).then(res => res.json());
}

export function fetchAllPhotos() {
  return fetch(`${ROOT_URL}/photos`).then(res => res.json());
}

export function fetchUsersItems(userId, item) {
  // basic error testing
  if (!['posts','albums','comments','photos'].includes(item)) {
    console.log("error fetching the users things... you passed in ", item);
  }
  return fetch(`${ROOT_URL}/${item}?userId=${userId}`).then(res => res.json());
}
/////////////////////////////////
// vvv for reference vvv
let standardUserObject = {
  address: { 
    city: "Gwenborough",
    geo: { 
      lat: "-37.3159", 
      lng: "81.1496" 
    },
    street: "Kulas Light",
    suite: "Apt. 556",
    zipcode: "92998-3874"
  },
  company: { 
    name: "Romaguera-Crona", 
    catchPhrase: "Multi-layered client-server neural-net", 
    bs: "harness real-time e-markets" 
  },
  email: "Sincere@april.biz",
  id: 1,
  name: "Leanne Graham",
  phone: "1-770-736-8031 x56442",
  username: "Bret",
  website: "hildegard.org",
}

let standardPostObject = {
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  id: 1,
  title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  userId: 1,
}

let standardAlbumObject = {
  id: 1,
  title: "quidem molestiae enim",
  userId: 1,
}

let standardCommentObject = {
  body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  email: "Eliseo@gardner.biz",
  id: 1,
  name: "id labore ex et quam laborum",
  postId: 1,
}

let standardPhotoObject = {
  albumId: 3,
  id: 101,
  thumbnailUrl: "https://via.placeholder.com/150/e743b",
  title: "incidunt alias vel enim",
  url: "https://via.placeholder.com/600/e743b",
}