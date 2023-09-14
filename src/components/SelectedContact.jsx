import { useState, useEffect } from "react";

export default function SelectedContact({setSelectedContactId, selectedContactId}) {
    const [contact, setContact] = useState(null);
    useEffect(()=>{
        async function fetchContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const result = await response.json();
                setContact(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContact();
        console.log("Contacts: ", contact);
    },[]);
    return (
        <div contact = {setSelectedContactId}>
            <h2>{contact.name}</h2>
            <p>Username: {contact.username}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Website: {contact.website}</p>
        </div>
    );
};