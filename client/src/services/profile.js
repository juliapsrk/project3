import api from './api';

export const profileLoad = (id) =>
  api.get(`/profile/${id}`).then((response) => response.data);

export const profileEdit = (profile) =>
  api.patch(`/profile/`, profile).then((response) => response.data);
