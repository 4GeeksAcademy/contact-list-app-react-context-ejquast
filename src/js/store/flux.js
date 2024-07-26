

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[]
		},
		actions: {

            // createUser = async () => {
            //     let option = {
			// 		method: "POST",
			// 		headers: {"Content-type": "application/json"},
			// 		body: JSON.stringify(contact)
			// 	}
			// 	try {
			// 		let response = await fetch("https://playground.4geeks.com/contact/agendas/ejquast", option)
			// 		if (!response.ok){
			// 			return false						
			// 		}else{
			// 			getActions().getContacts() 
			// 			return true
			// 		}
			// 	}
			// 	catch(error) {console.log(error)}
            //   },
			getContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/ejquast/contacts")
				.then(response => response.json())
				.then(data => setStore({contacts:data.contacts}))
			},
			
			addContacts: async(contact) => {
				 let option = {
					method: "POST",
					headers: {"Content-type": "application/json"},
					body: JSON.stringify(contact)
				}
				try {
					let response = await fetch("https://playground.4geeks.com/contact/agendas/ejquast/contacts", option)
					if (!response.ok){
						return false						
					}else{
						getActions().getContacts() 
						return true
					}
				}
				catch(error) {console.log(error)}
			},
            deleteContact: async (id) => {
                try {
                    const resp = await fetch(`https://playground.4geeks.com/contact/agendas/ejquast/contacts/${id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-type": "application/json"
                        }
                    });
                    if (!resp.ok) {
                        throw new Error(`error status: ${resp.status}`);
                    }
                    await getActions().getContacts();
                } catch (error) {
                    console.error("Error deleting contact:", error);
                }
            },
            updateContact: async (id, updatedContact) => {
                try {
                    const resp = await fetch(`https://playground.4geeks.com/contact/agendas/ejquast/contacts/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify(updatedContact)
                    });
                    if (!resp.ok) {
                        throw new Error(`Error status: ${resp.status}`);
                    }
                    await getActions().getContacts();
                } catch (error) {
                    console.error("Error updating contact:", error);
                }
            }

		}
	};
};

export default getState;