const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: []
        },
        actions: {
            fetchAllContacts: () => {
                fetch("https://playground.4geeks.com/apis/fake/contact/agenda/HelloAilyG")
                    .then(response => response.json())
                    .then(data => {
                        setStore({ contacts: data });
                    })
                    .catch(error => console.error("Error fetching contacts:", error));
            },
            fetchDeleteOneContact: id => {
                let options = {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                fetch("https://playground.4geeks.com/apis/fake/contact/" + id, options)
                    .then(response => {
                        if (!response.ok) throw Error(response.statusText);
                        return response;
                    })
                    .then(() => console.log("Successfully deleted"))
                    .catch(error => console.error("Error deleting contact:", error));
            },
            fetchCreateOneContact: newContact => {
				let options = {
					method: "POST",
					body: JSON.stringify(newContact),
					headers: { "Content-Type": "application/json" }
				};
				fetch("https://playground.4geeks.com/apis/fake/contact/", options)
					.then(response => {
						if (!response.ok) throw Error(response.statusText);
						return response;
					})
					.then(response => console.log("Successfully created", response))
					.catch(error => console.error("Error creating contact:", error));
			},
			fetchUpdateContact:editContact  =>{
				let options = {
					method: "PUT",
					body: JSON.stringify(editContact),
					headers: { "Content-Type": "application/json" }
				};
				fetch("https://playground.4geeks.com/apis/fake/contact/12557060618"+ editContact.id, options)
					.then(response => {
						if (!response.ok) throw Error(response.statusText);
						return response;
					})
					.then(response => console.log("Contact updated", response))
					.catch(error => console.error("Error updating contact:", error));
			},

            deleteContact: id => {
                const store = getStore();
                let revisedContactList = store.contacts.filter(contact => contact.id !== id);
                getActions().fetchDeleteOneContact(id);
                setStore({ contacts: revisedContactList });
            },
            saveContact: (fullName, address, email, phone) => {
                let newContact = {
                    full_name: fullName,
                    address: address,
                    email: email,
                    phone: phone,
                    agenda_slug: "HelloAilyG"
                };
                getActions().addContact(newContact);
            },
            updateContact: (fullName, address, email, phone) => { 
				let updatedContact = {
					full_name: fullName,
					address: address,
					email: email,
					phone: phone,
					agenda_slug: "HelloAilyG"
				}
				getActions().editContact(updatedContact);
            },

            addContact: aNewContact => {
                const store = getStore();
                let revisedStore = [...store.contacts, aNewContact];
                getActions().fetchCreateOneContact(aNewContact);
                setStore({ contacts: revisedStore });
            },
			editContact: updateAContact => {
                getActions().fetchUpdateContact(updateAContact)
                .then(() => {
                    const store = getStore();
                    let updatedContacts = store.contacts.map(contact =>
                        contact.id === updateAContact.id ? updateAContact : contact
                    );
                    setStore({ contacts: updatedContacts });
                });
                
            }
        }
    };
};

export default getState;
