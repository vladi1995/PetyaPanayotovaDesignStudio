import * as request from './requester';

const baseUrl = 'http://localhost:3030/users';

export const get = (userId) => request.get(`${baseUrl}/${userId}`);