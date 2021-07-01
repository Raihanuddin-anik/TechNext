import React from 'react';
import { Button,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostDetail = (props) => {

    const { title, body,id } = props.post;
    console.log(id)
    return (
        <div className="col-md-6 mt-4 ">
            <Link to={`/${id}`}  >
            <Card >
            
                <Card.Body className="m-auto " style={{width:"30rem"}}>
                    <Card.Title>Title: {title}</Card.Title>
                    <Card.Text>
                      Body: {body}
                    </Card.Text> 
                    
                </Card.Body>
            </Card>
            </Link>
        </div>
    );
};

export default PostDetail;