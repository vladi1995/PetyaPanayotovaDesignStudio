import './Comments.css';
import * as commentService from '../../services/commentService';
import { useEffect, useState } from 'react';
import CommentItem from './CommentItem';

const Comments = ({cardId}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentService.getAllCommentsDetailed(cardId)
        .then(res => setComments(res));
    },[]);
    
    return (
        <section className="u-clearfix u-grey-5 u-section-8" id="sec-feda">
            {comments.map(x => <CommentItem comment={x}/>)}
        </section>
    );
};

export default Comments;