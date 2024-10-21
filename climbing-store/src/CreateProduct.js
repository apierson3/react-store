import React, { useState, useEffect } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore"; 
import { db, auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";
import './CreateProduct.css'; // Make sure to create and use this CSS file

function CreateProduct({ isAuth }) {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const productsCollectionRef = collection(db, "products");
  let navigate = useNavigate();

  const createProduct = async () => {
    await addDoc(productsCollectionRef, {
      productName,
      productDescription,
      productPrice,
      productImage,
      Author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      CreatedAt: serverTimestamp()
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createProductPage">
      <div className="cpContainer">
        <h1>Create A Product</h1>
        <div className="inputContainer">
          <div className="inputGp">
            <label>Product Name:</label>
            <input
              placeholder="Product Name..."
              onChange={(event) => {
                setProductName(event.target.value);
              }}
            />
          </div>
          <div className="inputGp">
            <label>Product Description:</label>
            <textarea
              placeholder="Product Description..."
              onChange={(event) => {
                setProductDescription(event.target.value);
              }}
            />
          </div>
          <div className="inputGp">
            <label>Product Price:</label>
            <input
              type="number"
              placeholder="Product Price..."
              onChange={(event) => {
                setProductPrice(event.target.value);
              }}
            />
          </div>
          <div className="inputGp">
            <label>Product Image URL:</label>
            <input
              placeholder="Product Image URL..."
              onChange={(event) => {
                setProductImage(event.target.value);
              }}
            />
          </div>
          <button onClick={createProduct}>Submit Product</button>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
