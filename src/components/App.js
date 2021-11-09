import '../App.css';

import { React, useState, useEffect } from 'react';
import axios from 'axios';
import MemberForm from './MemberForm';
import Member from './Member';

const initialValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
        <p>Fill out the form below to add a member to your team!</p>
      </header>
      <h3 className="error-text"></h3>
      <MemberForm />
      {members.map(member => (<Member key={member.id} details={member} /> ))}
    </div>
  );
}

export default App;
