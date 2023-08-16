const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			fetchAllContacts: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/HelloAilyG")
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({ contacts: data })
					})
			},
			fetchDeleteOneContact: id => {
				let options = {
					method: 'DELETE',
					body: JSON.stringify(id),
					headers: { 'Content-Type': 'application/json' }
				}
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, options)
					.then(response => {
						if (!response.ok) throw Error(response.statusText);
					})
					.then(() => console.log("Successfully deleted"))
			},
			// Inside fetchCreateOneContact
			fetchCreateOneContact: async (fullName, address, email, phone) => {
				const options = {
					method: 'POST',
					body: JSON.stringify({ fullName: fullName, address: address, email: email, phone: phone }),
					headers: { 'Content-Type': 'application/json' }
				};


				try {
					const response = await fetch(
						"https://playground.4geeks.com/apis/fake/contact/",
						options
					);
					if (response.status !== 200) {
						alert("Response was not a code 200.");
						return false;
					}
					const data = await response.json();
					console.log("Contact stored: " + data);
					setStore({ contacts: data });
					return true;
				} catch (error) {
					console.log("Error! Description: " + error);
				}

			},
			// Modify saveContact to accept parameters
			saveContact: (fullName, address, email, phone) => {
				let newContact = {
					full_name: "",
					email: "",
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
				setStore({ contacts: revisedStore })
			}

		}
	}
};


export default getState;