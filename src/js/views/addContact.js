import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const AddContact = () => {
  const { actions } = useContext(Context);
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleSave = (e) => {
    e.preventDefault();
     actions.fetchCreateOneContact(fullName, address, email, phone);
    // Fetch all contacts again to update the contact list
    actions.fetchAllContacts();
    // Reset the form data
    
  };

  return (
    <>
      <form>
        <div className="container">
          <h1 className="header"> Add New Contact</h1>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Full Name"
              name="full_name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput3" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput3"
              placeholder="Enter Phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="formGroupExampleInput4" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput4"
              placeholder="Enter Address"
              name="address"
              value={address}
              onChange={(e)=> setAddress(e.target.value)}
            />
          </div>
          <div className="d-grid ">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => actions.fetchCreateOneContact(fullName, address, phone, email)}>
              Save
            </button>
          </div>
          <Link to="/">
            <p className="backHome">Get Back to Contacts</p>
          </Link>
        </div>
      </form>
    </>
  );
};

export default AddContact;
