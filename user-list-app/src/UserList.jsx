import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css"

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div>
      {listOfUser.map(user => (
        <>
        <div className="background" />
        <div className="outer-div">
          <div className="inner-div">
            <div className="front">
              <div className="front__bkg-photo" />
              <div className="front__face-photo" />
              <div className="front__text">
                <h3 className="front__text-header">{user.name}</h3>
                <p className="front__text-para">
                  <i className="fas fa-map-marker-alt front-icons" />
                  Seattle
                </p>
                <span className="front__text-hover">Hover to Find Me</span>
              </div>
            </div>
            <div className="back">
            
            </div>
          </div>
        </div>
      </>
      
      ))}
    </div>
  );
};

export default UserList;
