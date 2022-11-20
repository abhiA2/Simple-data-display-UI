import React, { useState } from 'react';
import User from './Components/User/User'
import UserList from './Components/User/UserList';

function App() {
  const [formData, setFormData] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setFormData((prevData) => {
      return [...prevData, { name: userName, age: userAge, id: Math.random().toString() }];
    });
  };

  return (
    <div>
      <h1 style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>Simpe Input Data Ui</h1>
      <User onAddUser={addUserHandler} />
      <UserList users={formData} />
    </div>
  );
}

export default App;
