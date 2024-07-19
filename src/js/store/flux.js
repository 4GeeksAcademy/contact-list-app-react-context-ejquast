

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:undefined
		},
		actions: {
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
				
			}

		}
	};
};

export default getState;