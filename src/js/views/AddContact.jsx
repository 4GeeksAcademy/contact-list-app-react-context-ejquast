import React, { useContext } from "react";
// import Flux from "@4geeksacademy/react-flux-dash";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useState } from "react";

export const AddContact = () => {
    const {store, actions} = useContext(Context)
    const navigate = useNavigate()
    const [inputValues, setInputValues] = useState({
		nameInput: '',
		emailInput: '',
		phoneInput: '',
		addressInput: ''
	});
    function createContact(e) {
		e.preventDefault()
		actions.addContacts({
            name: inputValues.nameInput, 
            email: inputValues.emailInput, 
            phone: inputValues.phoneInput, 
            address: inputValues.addressInput})
		.then(() => navigate("/"));
	}

    return (
        <div className="container">
            <div>
                <h1 className="text-center mt-5">Add a new contact</h1>
                <form>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control mb-2" placeholder="Full Name"
                        value={inputValues.nameInput}
                        onChange={(event) => {
                            setInputValues((prev) => ({
                                ...prev,
                                nameInput: event.target.value
                            }))}} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control mb-2" placeholder="Enter email"
                        value={inputValues.emailInput}
                        onChange={(event) => {
                            setInputValues((prev) => ({
                                ...prev,
                                emailInput: event.target.value
                            }))}} />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="phone" className="form-control mb-2" placeholder="Enter phone"
                        value={inputValues.phoneInput}
                        onChange={(event) => {
                            setInputValues((prev) => ({
                                ...prev,
                                phoneInput: event.target.value
                            }))}} />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control mb-3" placeholder="Enter address"
                        value={inputValues.addressInput}
                        onChange={(event) => {
                            setInputValues((prev) => ({
                                ...prev,
                                addressInput: event.target.value
                            }))}} />
                    </div>
                    <button type="button" className="btn btn-primary form-control mb-3" onClick={createContact}>save</button>
                    <Link className="w-100 text-center" to="/">Return to Contacts List</Link>
                </form>
            </div>
        </div>
    );
}