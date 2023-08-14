import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";
const Contact = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchAllContacts();
    }, []);

    return (
        <div className="container">
            <div className="ml-auto">
				<Link to="/AddContact">
					<button className="AddContactButton btn btn-success">Add new contact</button>
				</Link>
			</div>

            <div className="contact">
            <ul className='list-group '>
                {store.contacts.map((contact) => (
                    <li key={contact.id}>
                        <div className="contact-info">
                            <div className="contact-image">
                                <img src={"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"} alt={`${contact.full_name}'s Image`} />
                            </div>
                            <div className="contact-details">
                                <h4>{contact.full_name}</h4>
                                <p>{contact.address}</p>
                                <p>{contact.phone}</p>
                                <p>{contact.email}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default Contact;
