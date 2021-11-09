import '../App.css';

import { React, useState, useEffect } from 'react';
import MemberForm from './MemberForm';
import Member from './Member';
import axios from 'axios';

const initialValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

  axios.post('fakeapi.com', newMember)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    })
  }

  useEffect(() => {
    axios.get('fakeapi.com')
      .then(response => {
        setMembers(response);
      })
      .catch(error => {
        console.error(error);
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
        <p>Fill out the form below to add a member to your team!</p>
      </header>
      <h3 className="error-text">Test text</h3>
      <MemberForm formValues={formValues} updateForm={updateForm} submitForm={submitForm} />
      {members.map(member => (<Member key={member.id} details={member} /> ))}
    </div>
  );
}

export default App;
