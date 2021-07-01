import React, { useContext, useEffect, useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Button, Card, Modal } from 'react-bootstrap';
import { UserContext } from '../../App';
import ProfileDetails from './ProfileDetails';

const Profile = () => {
    const [ProfileData, setProfileData] = useState([]);
    const [profile, setProfile] = useState([]);
 const [newPost, setNewPost] = useState({
     title:"",
     body:""
 })
 const [UserInfo, setUserInfo] = useContext(UserContext);
console.log(newPost)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setProfileData(json)

            })

    }, [])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=2`)
            .then((response) => response.json())
            .then((json) => setProfile(json));
    }, [])
    const handleGetValue = (e,name) => {
        setUserInfo(name)
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${e}`)
            .then((response) => response.json())
            .then((json) => setProfile(json));
    }
const handleNewPost = (e) =>{
    newPost[e.target.name] = e.target.value;
  
  
}
const handleCreatePost = (e) => {
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then(json => 
             alert("newPost created")
        );
        
}
    return (
        <div className="container mt-3">
            <div className="d-flex">
                <div>
                    <DropdownButton id="dropdown-basic-button" title="Select Your Email">
                        {ProfileData.map((x, i) => (
                            <Dropdown.Item onClick={(email) => handleGetValue(x.id,x.name)} key={i}>
                                {x.email}

                            </Dropdown.Item>
                        )
                        )}
                    </DropdownButton>
                </div>
              <div className="ms-5">
              <form onSubmit={handleCreatePost}>
                  <h6>add a new post</h6>
                    <input placeholder="Title" name="title" onBlur={handleNewPost} required style={{width:"25vw"}}/>
                    <br></br>
                    <input className="w-100" name="body" onBlur={handleNewPost} required placeholder="Body"/>
                    <input type="submit"/>
                </form>
              </div>

            </div>
            <h3 className="text-center mb-3">Your posts</h3>
            <div className="row">

                {profile.map(y => (
                    <ProfileDetails y={y}></ProfileDetails>

                ))}

            </div>
        </div>
    );
};

export default Profile;