import api from './api';

export const ListAllCommunityPosts = () =>
  api.get('/community').then((response) => response.data);
