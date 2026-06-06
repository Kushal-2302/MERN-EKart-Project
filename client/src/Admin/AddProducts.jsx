import React, { useState } from "react";

const AddProducts = () => {
  const [product, setProduct] = useState({
    name: "",
    desc: "",
    quantity: "",
    price: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const categories = product.category
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item);

    if (categories.length > 2) {
      alert("Only 2 categories are allowed");
      return;
    }

    const payload = {
      ...product,
      quantity: Number(product.quantity),
      price: Number(product.price),
      category: categories,
    };

    // const payload = {
    //   ...product,
    //   quantity: Number(product.quantity),
    //   price: Number(product.price),
    //   category: product.category.split(",").map((item) => item.trim()),
    // };

    console.log(payload);

    // Example API Call
    // await axios.post("http://localhost:5000/api/products", payload);

    try {
      const response = await fetch("http://localhost:5000/ekartApi/ekart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Product Added Successfully");

        setProduct({
          name: "",
          desc: "",
          quantity: "",
          price: "",
          category: "",
          image: "",
        });

        console.log(data);
      } else {
        alert(data.message || "Failed to add product");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }

    alert("Product Added Successfully");
  };
  return (
    <div className="add-products">
      <h1>Add Products</h1>

      <div className="formbox">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Enter Product Name"
              required
            />
          </div>

          <div className="field">
            <label>Description</label>
            <textarea
              name="desc"
              value={product.desc}
              onChange={handleChange}
              placeholder="Enter Description"
              required
            />
          </div>

          <div className="field">
            <label>Quantity</label>
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
              min="0"
              required
            />
          </div>

          <div className="field">
            <label>Price</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              min="0"
              required
            />
          </div>

          <div className="field">
            <label>Categories</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              placeholder="Electronics, Mobile, Accessories"
              required
            />
          </div>

          <div className="field">
            <label>Image URL</label>
            <input
              type="text"
              name="image"
              value={product.image}
              onChange={handleChange}
              placeholder="Paste Image URL"
              required
            />
          </div>

          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
