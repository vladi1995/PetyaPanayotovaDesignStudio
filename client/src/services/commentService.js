import * as request from "./requester";

const baseUrlComment = 'http://localhost:3030/data/comments';

export const create = (cardId, comment) => request.post(baseUrlComment, {cardId, comment});

export const getAllCommentsDetailed = (cardId) => {
    const relations = encodeURIComponent(`user=_ownerId:users`);
    const search = encodeURIComponent(`cardId="${cardId}"`);

    return request.get(`${baseUrlComment}?where=${search}&load=${relations}`);
};
