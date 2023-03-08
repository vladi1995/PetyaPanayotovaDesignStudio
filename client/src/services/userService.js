import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/userList';

export const get = () => request.get(baseUrl);

export const create = (userData) => request.post(baseUrl, userData);

export const remove = (userId) => request.del(`${baseUrl}/${userId}`);
