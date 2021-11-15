import '../App.css';
import '../reset.css';

import { React, useState } from 'react';
import MemberForm from './MemberForm';
import Member from './Member';
// import axios from 'axios';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
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

    if (newMember.name.length > 20) {
      setFormErrors("Please enter a name of 20 characters or less.");
      return;
    }

    setMembers([newMember, ...members ]);
    setFormErrors("");
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Members</h1>
        <p>Fill out the form below and click "SUBMIT" to add a member to your team!</p>
      </header>
      <h3 className="error-text">{formErrors}</h3>
      <MemberForm formValues={formValues} updateForm={updateForm} submitForm={submitForm} />
      <p className="memberHeader">Active Members:</p>
      {members.map(member => (<Member key={member.name} details={member} /> ))}
    </div>
  );
}

export default App;
