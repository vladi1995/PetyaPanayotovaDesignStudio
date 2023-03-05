import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/cards';

export const getAll = () => request.get(baseUrl);

export const getOne = (gameId) => request.get(`${baseUrl}/${gameId}`);

export const create = (gameData) => request.post(baseUrl, gameData);

export const edit = (gameId, gameData) => request.put(`${baseUrl}/${gameId}`, gameData);

export const remove = (gameId) => request.del(`${baseUrl}/${gameId}`);

export const getOneDetailed = (cardId) => {
    const relations = encodeURIComponent(`user=_ownerId:users`);  
    const search = encodeURIComponent(`_id="${cardId}"`); 

    return request.get(`${baseUrl}?where=${search}&load=${relations}`);
};