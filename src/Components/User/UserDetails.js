import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
const UserDetails = () => {
    const [filteredUser, setFilteredUser] = useState({});
    console.log(filteredUser)
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(json =>
                setFilteredUser(json)

            )

    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Card>
                        <h4 className="text-center">User Details</h4>
                        <hr></hr>
                        <Card.Body>
                            <Card.Title>Name: {filteredUser.username}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Email: {filteredUser.email}</Card.Subtitle>
                            <Card.Text>Phone:
                                {filteredUser.phone}
                            </Card.Text>
                            <Card.Text>Website:
                                {filteredUser.website}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                   
                </div>
                <div className="col-md-4">
               {filteredUser.address && <Card >
                        <h4 className="text-center">User Address</h4>
                        <hr></hr>
                        <Card.Body>
                            <Card.Title>City: {filteredUser.address.city}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Street: {filteredUser.address.street}</Card.Subtitle>
                            <Card.Text>suite:
                                {filteredUser.address.suite}
                            </Card.Text>
                            <Card.Text>Zipcode:
                                {filteredUser.address.zipcode}
                            </Card.Text>
                        </Card.Body>
                    </Card>}
                </div>
                <div className="col-md-4">
               {filteredUser.company && <Card >
                        <h4 className="text-center">User Company</h4>
                        <hr></hr>
                        <Card.Body>
                            <Card.Title>Company Name: {filteredUser.company.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Email: {filteredUser.email}</Card.Subtitle>
                            <Card.Text>Phone:
                                {filteredUser.phone}
                            </Card.Text>
                            <Card.Text>Website:
                                {filteredUser.website}
                            </Card.Text>
                        </Card.Body>
                    </Card>}
                </div>
            </div>
        </div>
    );
};

export default UserDetails;