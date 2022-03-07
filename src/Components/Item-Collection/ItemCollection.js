import React from "react";

import "./ItemCollection.styles.scss";

const ItemCollection = ({ id, name, price, imageUrl }) => (
  <div className="item-collection">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="footer-collection">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
    </div>
  </div>
);

export default ItemCollection;
