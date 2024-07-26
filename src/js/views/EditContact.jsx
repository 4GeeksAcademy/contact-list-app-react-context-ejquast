import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [inputValues, setInputValues] = useState({
        nameInput: '',
        emailInput: '',
        phoneInput: '',
        addressInput: ''
    });

    // Function to handle form submission
    function adjustContact(e) {
        e.preventDefault(); // Prevent default form submission behavior
        actions.updateContact({
            name: inputValues.nameInput,
            email: inputValues.emailInput,
            phone: inputValues.phoneInput,
            address: inputValues.addressInput
        });
        navigate("/"); // Navigate back to the contact list
    }

    // Function to handle input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues((prev) => ({
            ...prev,
            [name]: value // Use computed property names to update state
        }));
    };

    return (
        <div className="container">
            <div>
                <h1 className="text-center mt-5">Edit a contact</h1>
                <form onSubmit={adjustContact}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            name="nameInput"
                            value={inputValues.nameInput}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            name="emailInput"
                            value={inputValues.emailInput}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input
                            type="phone"
                            className="form-control"
                            placeholder="Enter phone"
                            name="phoneInput"
                            value={inputValues.phoneInput}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter address"
                            name="addressInput"
                            value={inputValues.addressInput}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary form-control">Save</button>
                    <Link className="mt-3 w-100 text-center" to="/">Return to Contacts List</Link>
                </form>
            </div>
        </div>
    );
};