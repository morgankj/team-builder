import React from 'react';

const MemberForm = ({ formValues, updateForm, submitForm }) => {

    const onChange = event => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        updateForm(inputName, inputValue);
    }
    
    const onSubmit = event => {
        event.preventDefault();
        submitForm();
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Name
                    <input
                        type='text'
                        name='name'
                        value={formValues.name}
                        onChange={onChange}
                        maxLength='20'
                    />
                </label>
                <label>Email
                    <input
                        type='email'
                        name='email'
                        value={formValues.email}
                        onChange={onChange}
                    />
                </label>
                <label>Role
                    <select value={formValues.role} name='role' onChange={onChange}>
                        <option value=''>-- Select a Role --</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Designer'>Designer</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Other'>Other</option>
                    </select>
                </label>

                <div className='submit'>
                    <button disabled={!formValues.name || !formValues.email || !formValues.role}>SUBMIT</button>
                </div>
            </div>
        </form>
    )
}

export default MemberForm;