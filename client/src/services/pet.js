import api from './api';

/*
The URLSearchParams class encodes a JS object as a URL query string
Eg. { foo: 'bar', abc: 123 } => 'foo=bar&abc=123' 
*/

export const petSearch = (filters) =>
  api
    .get(`/pet/search?${new URLSearchParams(filters).toString()}`)
    .then((response) => response.data);

export const petLoad = (id) =>
  api.get(`/pet/${id}`).then((response) => response.data);

export const petEdit = (id, pet) =>
  api.patch(`/pet/${id}`, pet).then((response) => response.data);

export const petCreate = (pet) =>
  api.post('/pet', pet).then((response) => response.data);

export const petDelete = (id) =>
  api.delete(`/pet/${id}`).then((response) => response.data);

export const bookmarkList = () =>
  api.get('/pet/bookmarked').then((response) => response.data);

export const bookmarkAdd = (id) =>
  api.post(`/pet/${id}/bookmark`).then((response) => response.data);

export const bookmarkRemove = (id) =>
  api.delete(`/pet/${id}/bookmark`).then((response) => response.data);
