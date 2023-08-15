
import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";

const AddContact = () => {
  return (
    <>
      <form>
        <div class="container">
          <h1 class="header"> Add New Contact</h1>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Full Name"
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Email"
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput3" class="form-label">
              Phone
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput3"
              placeholder="Enter Phone"
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput4" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput4"
              placeholder="Enter Address"
            />
          </div>
          <div class="d-grid ">
            <button class="btn btn-primary" type="button">
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

