import React from "react";
// import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

import { ContactCard } from '../component/ContactCard';
import Modal from '../component/Modal';
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";


export const Contacts = () => {
    const { store, actions } = useContext(Context);
    const [contactsState, setContactsState] = useState(false)

    useEffect(() => {
        actions.getContacts();
    }, []);


    return (
        <div className="container">
            <div>
                <p className="text-right my-3">
                    <Link className="btn btn-success" to="/add">Add new contact</Link>
                </p>
                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                    <ul className="list-unstyled">
                        {store.contacts.length > 0 ? (
                            store.contacts.map((contact) => (
                                <li key={contact.id}>
                                    <Link to={`/contact/${contact.id}`}>{contact.full_name}</Link>
                                </li>
                            ))
                        ) : (
                            <p>No contacts available.</p>
                        )}
                    </ul>
                </div>
            </div>
            <Modal show={this.state.showModal} onClose={() => this.setState({ showModal: false })} />
        </div>
    );
}