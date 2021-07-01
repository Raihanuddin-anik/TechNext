import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './User.css'
const User = () => {
 const  [user, setUser] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setUser(json)

            })

    }, [])
    return (
        <div className="container">
              <table className="table table-borderless">
        <thead>
            <tr>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Website</th>
            </tr>
        </thead>
        <tbody>
          
               
                   {user.map(data =>( <tr>
                        <Link to={`/userDetails/${data.id}`} className="name">{data.name}
                        <span className="tooltiptext m-3">Show User Details by click on Name</span></Link>
                        <td>{data.email}</td>
                        <a href={`https://www.${data.website}`}>{data.website}</a>
                    </tr>
                    ))}
                
          
        </tbody>
    </table>
        </div>
    );
};

export default User;