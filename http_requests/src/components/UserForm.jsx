import { useState } from "react";

const UserForm = ({ onFormSubmit }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(firstName, lastName);
    }


    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    return <form onSubmit={onSubmit}>
        <input type="text" placeholder="First Name" onChange={e => { setFirstName(e.target.value) }} />
        <input type="text" placeholder="Last Name" onChange={e => { setLastName(e.target.value) }} />
        <button>Submit</button>
    </form>
}

export default UserForm;