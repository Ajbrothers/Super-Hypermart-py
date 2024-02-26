import React, { useState, useEffect } from "react";
import api from "../services/api";

const ProductPanel = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async () => {
    try {
      await api.post("/products", newProduct);
      setNewProduct({ name: "", description: "", category: "" });
      fetchProducts(); // Refresh product list after adding new product
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const renderProductCategories = () => {
    const categories = [
      ...new Set(products.map((product) => product.category)),
    ];
    return categories.map((category) => (
      <div key={category}>
        <h3>{category}</h3>
        <ul>
          {products
            .filter((product) => product.category === category)
            .map((product) => (
              <li key={product.id}>
                {product.name} - {product.description}
              </li>
            ))}
        </ul>
      </div>
    ));
  };

  return (
    <div>
      <h2>Product Panel</h2>
      <div>
        <h3>Add New Product</h3>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={newProduct.category}
          onChange={handleInputChange}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      <div>
        <h3>Product Categories</h3>
        {renderProductCategories()}
      </div>
    </div>
  );
};

export default ProductPanel;
