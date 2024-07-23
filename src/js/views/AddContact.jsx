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
		navigate("/")
	}

    return (
        <div className="container">
            <div>
                <h1 className="text-center mt-5">Add a new contact</h1>
                <form>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" className="form-control" placeholder="Full Name" value={inputValues.nameInput} onChange={(event) => {setInputValues((prev) => ({
                            ...prev,
                            nameInput: event.target.value
                        }))}} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="phone" className="form-control" placeholder="Enter phone" />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Enter address" />
                    </div>
                    <button type="button" className="btn btn-primary form-control" onClick={createContact}>save</button>
                    <Link className="mt-3 w-100 text-center" to="/">or get back to contacts</Link>
                </form>
            </div>
        </div>
    );
}