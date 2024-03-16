import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faBathtub } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "../styles/property-card.css";

const PropertyCard = ({
  title,
  type,
  bedrooms,
  bathrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card">
      <h3 className="property-card-title">{title}</h3>
      <p className="property-card-type-location">
        {type} - {city}
      </p>
      <p className="property-card-bedrooms" data-testid="property-bedrooms">
        <FontAwesomeIcon icon={faBed} /> {bedrooms}
      </p>
      <p className="property-card-bathrooms" data-testid="property-bathrooms">
        <FontAwesomeIcon icon={faBathtub} /> {bathrooms}
      </p>
      <p className="property-card-price">£{price}</p>
      <a href={`mailto:${email}`} className="property-card-email">
        <FontAwesomeIcon icon={faEnvelope} /> Email
      </a>
    </div>
  );
};

export default PropertyCard;