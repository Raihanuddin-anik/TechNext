import React, { useEffect, useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
const ProfileDetails = ({ y }) => {
    const [show, setShow] = useState(false);
    const [clicked, setClicked] = useState(false);
    const handleClose = () => {

        setClicked(false)
        setShow(false)

    };
    const handleShow = () => setShow(true)
    const [updateTitle, setUpdateTitle] = useState('')
    const [updateBody, setUpdateBody] = useState('')
    const handleDelete = (id, e) => {
        console.log(e)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    e.target.parentNode.style.display = "none";

                }
            })

        alert(`the post with ${id} id is Deleted`)
    }
    const OpenModal = (id) => {
        handleShow()
        console.log(id)
    }
    const handleUpdate = (id) => {
        setClicked(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: updateTitle,
                body: updateBody
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)

                handleClose()


            });
    }


    return (

        <div className="col-md-6" >
           
            <Card >
                <Card.Body className="m-auto " style={{ width: "30rem" }}>
                    <h3> UserId : {y.userId}</h3>
                    <Card.Title>Title : {y.title}</Card.Title>
                    <Card.Text>
                        Body : {y.body}
                    </Card.Text>

                </Card.Body>
                <Button variant="success" onClick={() => OpenModal(y.id)}>Update</Button>
                <Button variant="danger" onClick={(e) => handleDelete(y.id, e)}>Delete</Button>

            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Change {y.id} Number post</Modal.Title>
                </Modal.Header>
                <div className="text-center">
                    Title: <input onBlur={(e) => setUpdateTitle({ title: e.target.value })} className="w-50 m-2" />
                    <br></br>
                    body: <input onBlur={(e) => setUpdateBody({ body: e.target.value })} className="w-75" />
                </div>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleUpdate(y.id)}>
                        {clicked ? "Loading..." : "Save Changes"}
                    </Button>

                </Modal.Footer>
                <p className="text-center">See Changes at console changes data don't go to server</p>
            </Modal>


        </div>

    );
};

export default ProfileDetails;