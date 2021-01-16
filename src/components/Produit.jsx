import React from "react";
import Image from "./Image";
import Button from "./Button";
import PropsTypes from "prop-types";

function Produit(props) {
  const { name, price, marque, imagepath, buttonName, action } = props.produit;

  return (
    <div className="product-container">
      <h2>{name}</h2>
      <br />
      <p> {price}</p>
      <br />
      <p> {marque}</p>
      <br />
      <div>
        <Image imagepath={imagepath} />
      </div>
      <br />
      <Button onClick={action} ButtonName={buttonName} />
    </div>
  );
}
Produit.prototype = {
  name: PropsTypes.string,
  marque: PropsTypes.string,
  ButtonName: PropsTypes.string,
  price: PropsTypes.number,
  imagepath: PropsTypes.string,
};
export default Produit;
