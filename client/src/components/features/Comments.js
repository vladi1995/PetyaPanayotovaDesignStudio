import './Comments.css';
import * as commentService from '../../services/commentService';
import * as userService from '../../services/userService';
import { useContext, useEffect, useState } from 'react';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';
import { AuthContext } from '../../contexts/AuthContext';

const Comments = ({ card }) => {
    const [comments, setComments] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        commentService.getAllCommentsDetailed(card[0]._id)
            .then(res => setComments(res));
    }, []);

    const addNewComment = (commentInfo) => {
        setComments(state => [
            ...state,
            commentInfo,
        ]);
    };

    return (
        <>
            <section className="u-clearfix u-grey-5 u-section-8" id="sec-feda">
                {comments.map(x => <CommentItem comment={x} />)}
            </section>
            {user._id !== card[0]._ownerId && <CommentForm cardId={card[0]._id} addNewComment={addNewComment} />}
            
        </>
    );
};

export default Comments;