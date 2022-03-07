import React from "react";
import ItemCollection from "../Item-Collection/ItemCollection";
import "./PreviewCollection.styles.scss";

const PreviewCollection = ({ title, items }) => (
  <div className="preview-collection">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(({id, ...otherItemProps}) => (
          <ItemCollection key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
