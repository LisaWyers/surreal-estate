import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";
import SideBar from "../SideBar";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    getAllProperties();
  }, []);

  const getAllProperties = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/PropertyListing/"
      );
      setProperties(data);
    } catch (err) {
      setAlert({ message: "There has been an error, please try again later." });
    }
  };

  // const deleteAllProperties = async (propertyID) => {
  //   try {
  //     const deleted = await axios.delete(
  //       `http://localhost:4000/api/v1/PropertyListing/${propertyID}`,
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const { search } = useLocation();

  const filterProperties = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/PropertyListing${search}`
      );
      setProperties(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    filterProperties();
  }, [search]);

  return (
    <>
      <SideBar />
      <div className="property-page-heading">Properties Page</div>
      <div className="property-cards-container">
        {alert && <Alert message={alert.message} />}
        {properties.map((property) => (
          <PropertyCard key={property._id} {...property} />
        ))}
        {/* {properties.map((property) => {
          deleteAllProperties(property._id);
          return null;
        })} */}
      </div>
    </>
  );
};

export default Properties;
