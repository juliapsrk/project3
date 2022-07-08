import api from './api';

export const petSearch = (filters) =>
  api
    .get(`/pet/search?${new URLSearchParams(filters).toString()}`)
    .then((response) => response.data);

export const petLatest = () =>
  api.get('/pet/list/latest').then((response) => response.data);

export const petAll = () =>
  api.get('/pet/list/').then((response) => response.data);

export const petAllByUser = (id) =>
  api.get(`/pet/list/user/${id}`).then((response) => response.data);

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
  api.post(`/pet/bookmark/${id}`).then((response) => response.data);

export const bookmarkRemove = (id) =>
  api.delete(`/pet/bookmark/${id}`).then((response) => response.data);
