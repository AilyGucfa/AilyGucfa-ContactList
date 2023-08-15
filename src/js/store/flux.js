const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
		
			fetchAllContacts: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/HelloAilyG")
				.then(response => response.json())
				.then(data => {
					console.log(data);
					setStore({contacts: data})
				})
			},
			fetchDeleteOneContact: id => {
				let options = {
					method: 'DELETE',
					body: JSON.stringify(id),
					headers: {'Content-Type': 'application/json'}
				}
				
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, options)
					.then(response => {
						if (!response.ok) throw Error(response.statusText);
					})
					.then(() => console.log("Successfully deleted"))
			},
			// Inside fetchCreateOneContact
			fetchCreateOneContact: newContact => {
    			const options = {
        			method: 'POST',
        			body: JSON.stringify(newContact),
        			headers: { 'Content-Type': 'application/json' }
    		};

    		fetch("https://playground.4geeks.com/apis/fake/contact", options)
        		.then(response => response.json())
        		.then(data => {
            	console.log("Successfully created:", data);
            	// Update the store with the new contact
            	getActions().addContact(data);
        	})
        	.catch(error => console.error("Error creating contact:", error));
		},

		// Modify saveContact to accept parameters
			saveContact: (fullName, address, email, phone) => {
    		let newContact = {
        	full_name: "AilyG",
        	email: "almacin@gmail.com",
        	address: "111 brickell",
        	phone: "(347)-416-4157",
        	agenda_slug: "HelloAilyG"
    	};
    		getActions().fetchCreateOneContact(newContact);
		},
			deleteContact: id => {
				const store = getStore();
				let revisedContactList = store.contacts.filter(contact => contact.id !== id);
				getActions().fetchDeleteOneContact(id);
				setStore({ contacts: revisedContactList });
			},
			addContact: (aNewContact) => {
				const store = getStore();
				let revisedStore = [...store.contacts, aNewContact];
				getActions().fetchCreateOneContact(aNewContact);
				setStore({contacts: revisedStore})
			}
			
		}
	}
};


export default getState;