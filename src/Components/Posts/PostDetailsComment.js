import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button,Card } from 'react-bootstrap';
const PostDetailsComment = () => {
    const { id } = useParams();
    const [post, setPost] = useState('');
    const [comment, setCommnet] = useState([]);
    console.log(comment)
    console.log(post)
    const showComment = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then((response) => response.json())
            .then(json => setCommnet(json));
    }
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((json) => setPost(json));
    }, [])
    return (
        <div>
            <Card >

                <Card.Body className="m-auto " style={{ width: "30rem" }}>
                    <Card.Title>Title: {post.title}</Card.Title>
                    <Card.Text>
                        Body: {post.body}
                    </Card.Text>

                </Card.Body>
                
              
                <p onClick={() => showComment(id)}  style={{cursor:"pointer"}} className="text-center">show Comment</p>
            </Card>
            {comment.map(z =>(
            <div style={{border:"1px solid red",margin:"50px"}} className="text-center w-25 m-auto">
                    <h6>{z.email}</h6>
                    <h6> Comment Id: {z.id}</h6>
                    <small  className="text-center">{z.body}</small>
                </div>))}
        </div>
    );
};

export default PostDetailsComment;