import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/boughtProducts';

export const getAll = () => request.get(baseUrl);

export const create = (cardId) => request.post(baseUrl, cardId);

