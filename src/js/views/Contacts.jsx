import React, { useContext, useEffect, useState } from "react";
// import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

import { ContactCard } from '../component/ContactCard';
import Modal from '../component/Modal';
import { Context } from "../store/appContext";


export const Contacts = () => {
    const { store, actions } = useContext(Context);
    const [idToDelete, setIdToDelete] = useState();

    useEffect(() => {
        actions.getContacts();
    }, []);

    return (
        <div className="container">
            <div>
                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                <ul className="list-unstyled">
                    {store.contacts && store.contacts.length > 0 ? (
                    store.contacts.map((contact) => (
                    <ContactCard key={contact.id} {...contact} onDelete={() => setIdToDelete(contact.id)} />
                    ))
                    ) : (
                    <p>No contacts available.</p>
                    )}
                </ul>
                </div>
            </div>
            <Modal 
                show={idToDelete !== undefined} 
                onClose={() => setIdToDelete(undefined)} 
                onDelete={() => actions.deleteContact(idToDelete)
                    .then(() => setIdToDelete(undefined))
                } />
        </div>
    );
}