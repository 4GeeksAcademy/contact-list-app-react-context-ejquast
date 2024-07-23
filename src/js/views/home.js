import React, { useContext, useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ContactCard } from "../component/ContactCard";
import Modal from "../component/Modal";
import { Context } from "../store/appContext"

export const Home = () => {
	const [show, setShow] = useState(false)
	const {store, actions} = useContext(Context)
	const [showModal, setShowModal] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null);

    const openModal = (contact) => {
        setContactToDelete(contact);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setContactToDelete(null);
    };

    const deleteContact = async () => {
        if (contactToDelete) {
            await actions.deleteContact(contactToDelete.id);
            closeModal();
        }
    };

    useEffect(() => {
        actions.getContacts();
    }, []);

	return (
	<div className="mt-5">
		{store.contacts?.map((contact) => {
			return <ContactCard 
				key = {contact.id}
				id = {contact.id}
				name = {contact.name}
				address = {contact.address}
				phone = {contact.phone}
				email = {contact.email}
				onDeleteClick={() => openModal(item)} />
		})}
		
		<Modal show={showModal} onClose={closeModal} onDelete={deleteContact} />
	</div>
	);
}