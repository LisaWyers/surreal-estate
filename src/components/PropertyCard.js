import React from "react";
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
      <p className="property-card-bedrooms" data-testid="property-bedrooms"> {bedrooms}
      </p>
      <p className="property-card-bathrooms" data-testid="property-bathrooms"> {bathrooms}
      </p>
      <p className="property-card-price">£{price}</p>
      <a href={`mailto:${email}`} className="property-card-email"> Email
      </a>
    </div>
  );
};

export default PropertyCard;