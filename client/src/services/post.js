import api from './api';

export const listPosts = () =>
  api.get('/post/list').then((response) => response.data);

export const listLatest = () =>
  api.get('/post/list/latest').then((response) => response.data);

export const postLoad = (id) =>
  api.get(`/post/${id}`).then((response) => response.data);

export const postEdit = (id, post) =>
  api.patch(`/post/${id}`, post).then((response) => response.data);

export const postCreate = (post) =>
  api.post('/post', post).then((response) => response.data);

export const postDelete = (id) =>
  api.delete(`/post/${id}`).then((response) => response.data);
