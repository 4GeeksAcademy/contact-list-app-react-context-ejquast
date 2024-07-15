import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { ContactCard } from "../component/ContactCard";
import Modal from "../component/Modal";

export const Home = () => {
	const [show, setShow] = useState({false})
	return (
	<div className="text-center mt-5">
		<ContactCard onDelete={() => setShow(true)} />
		<Modal show={show} onClose{() => setShow(false)} />
	</div>
	);
}