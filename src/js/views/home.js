import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ContactCard } from "../component/ContactCard";
import Modal from "../component/Modal";
import { Context } from "../store/appContext"

export const Home = () => {
	const [show, setShow] = useState(false)
	const {store, actions} = useContext(Context)
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
				onDelete={() => setShow(true)} />
		})}
		
		<Modal show={show} onClose={() => setShow(false)} />
	</div>
	);
}