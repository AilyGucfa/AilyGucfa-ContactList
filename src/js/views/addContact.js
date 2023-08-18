import React, { useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Link , useNavigate } from 'react-router-dom';

const AddContact = () => {
  const {store, actions } = useContext(Context);
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  let navigate = useNavigate()

  const handleSave = (e) => {
    e.preventDefault();
    console.log(fullName, address, email,phone)
    actions.saveContact(fullName, address, email, phone);
    // Fetch all contacts again to update the contact list
    setFullName("")
    setAddress("")
    setEmail("")
    setPhone("")
    navigate("/")
    
  };

  return (
    <>
      <h1 className="header"> Add New Contact</h1>
      <form>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="addFullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="addFullName"
              placeholder="Full Name"
              name="full_name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="addEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="addEmail"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="addPhone" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="addPhone"
              placeholder="Enter Phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="addAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="addAddress"
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
              onClick={(e) => handleSave(e)}>
              Save
            </button>
          </div>
          <Link to="/">
            <p className="backToHome">Get Back to Contacts</p>
          </Link>
        </div>
      </form>
    </>
  );
};

export default AddContact;
