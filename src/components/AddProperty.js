import React, { useState } from "react";
import axios from "axios";
import "../styles/add-property.css";
import Alert from "./Alert";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = async (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/PropertyListing/",
        fields,
      );
      setAlert({
        message: "The property has been added successfully!",
        isSuccess: true,
      });
      console.log(data);
    } catch (error) {
      setAlert({
        message: "Server error, please try again later.",
        isSuccess: false,
      });
    }
    setFields(initialState.fields);
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  return (
    <div className="add-property">
      <Alert message={alert.message} success={alert.isSuccess} />
      <form className="add-property-form" onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Property Title:
          <br />
          <br />
          <input
            id="title"
            name="title"
            placeholder="Blue Cottage"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="city">
          City:
          <br />
          <br />
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Birmingham">Birmingham</option>
            <option value="Oxford">Oxford</option>
          </select>
        </label>
        <label htmlFor="type">
          Type:
          <br />
          <br />
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Bedrooms:
          <br />
          <br />
          <input
            id="bedrooms"
            name="bedrooms"
            type="number"
            placeholder="3"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="bathrooms">
          Bathrooms:
          <br />
          <br />
          <input
            id="bathrooms"
            name="bathrooms"
            type="number"
            placeholder="1"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="price">
          Price:
          <br />
          <br />
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            step="500"
            placeholder="250000"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <br />
          <br />
          <input
            id="email"
            name="email"
            type="text"
            placeholder="john.smith@email.com"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;