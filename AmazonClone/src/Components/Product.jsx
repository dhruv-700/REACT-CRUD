import React, { useEffect, useState } from "react";

const Product = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [about, setAbout] = useState("");
  const [product, setProduct] = useState([]);

  const [editIndex, setEditIndex] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("product"));
    if (storedProducts) {
      setProduct(storedProducts);
    }
  }, []);

  useEffect(() => {
    if (product.length > 0) {
      localStorage.setItem("product", JSON.stringify(product));
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, description, price, about, image };

    if (editIndex !== null) {
      const updatedProducts = [...product];
      updatedProducts[editIndex] = newProduct;
      setProduct(updatedProducts);
      setEditIndex(null);
    } else {
      setProduct([...product, newProduct]);
    }

    setName("");
    setDescription("");
    setPrice("");
    setAbout("");
    setImage(null);
  };

  const handleEdit = (index) => {
    const selectedProduct = product[index];
    setName(selectedProduct.name);
    setPrice(selectedProduct.price);
    setDescription(selectedProduct.description);
    setAbout(selectedProduct.about);
    setImage(selectedProduct.image);
    setEditIndex(index);
  };
  function handleDelete(index) {
    setProduct(product.filter((_, i) => i !== index));
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <main style={{ padding: "150px 40px" }}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "40px 20px",
            height: "500px",
            width: "500px",
            border: "1.5px solid black",
          }}
        >
          <form onSubmit={handleSubmit}>
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                paddingBottom: "20px",
              }}
            >
              <u> Add Products </u>
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "stretch",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <div
                style={{ flexBasis: "300px", flexGrow: "1", flexShrink: "0" }}
              >
                <label
                  style={{
                    display: "flex",
                    fontSize: "1.1rem",
                    fontWeight: "normal",
                    marginBottom: "2px",
                  }}
                  htmlFor="productName"
                >
                  Product Name
                </label>
                <input
                  id="productName"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    display: "flex",
                    width: "100%",
                    padding: "10px 10px",
                    borderRadius: "5px",
                    border: "1px solid rgb(179, 178, 178)",
                  }}
                />
              </div>

              <div
                style={{ flexBasis: "300px", flexGrow: "1", flexShrink: "0" }}
              >
                <label
                  htmlFor="price"
                  style={{
                    display: "flex",
                    fontSize: "1.1rem",
                    fontWeight: "normal",
                    marginBottom: "2px",
                  }}
                >
                  Product Price{" "}
                </label>
                <input
                  id="price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  style={{
                    display: "flex",
                    width: "100%",
                    padding: "10px 10px",
                    borderRadius: "5px",
                    border: "1px solid rgb(179, 178, 178)",
                  }}
                />
              </div>
              <div
                style={{ flexBasis: "300px", flexGrow: "1", flexShrink: "0" }}
              >
                <label
                  htmlFor="description"
                  style={{
                    display: "flex",
                    fontSize: "1.1rem",
                    fontWeight: "normal",
                    marginBottom: "2px",
                  }}
                >
                  Description
                </label>
                <input
                  id="description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{
                    display: "flex",
                    width: "100%",
                    padding: "10px 10px",
                    borderRadius: "5px",
                    border: "1px solid rgb(179, 178, 178)",
                  }}
                />
              </div>
              <div
                style={{ flexBasis: "300px", flexGrow: "1", flexShrink: "0" }}
              >
                <label
                  htmlFor="about"
                  style={{
                    display: "flex",
                    fontSize: "1.1rem",
                    fontWeight: "normal",
                    marginBottom: "2px",
                  }}
                >
                  About
                </label>
                <input
                  id="about"
                  type="text"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  style={{
                    display: "flex",
                    width: "100%",
                    padding: "10px 10px",
                    borderRadius: "5px",
                    border: "1px solid rgb(179, 178, 178)",
                  }}
                />
              </div>
              <div
                style={{
                  minWidth: "100%",
                  flexBasis: "300px",
                  flexGrow: "1",
                  flexShrink: "0",
                }}
              >
                <label
                  htmlFor="image"
                  style={{
                    display: "flex",
                    fontSize: "1.1rem",
                    fontWeight: "normal",
                    marginBottom: "2px",
                  }}
                >
                  Product Image
                </label>
                <input
                  onChange={handleImageUpload}
                  id="image"
                  type="file"
                  accept="images/*"
                  style={{
                    display: "flex",
                    width: "100%",
                    padding: "10px 10px",
                    borderRadius: "5px",
                    border: "1px solid rgb(179, 178, 178)",
                  }}
                />
              </div>
              <div
                style={{
                  minWidth: "100%",
                  flexBasis: "300px",
                  flexGrow: "1",
                  flexShrink: "0",
                }}
              >
                <button
                  onClick={handleSubmit}
                  type="submit"
                  style={{
                    display: "flex",
                    width: "100%",
                    padding: "10px 10px",
                    borderRadius: "5px",
                    border: "1px solid rgb(179, 178, 178)",
                    justifyContent: "center",
                  }}
                >
                  {editIndex !== null ? "Update" : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>

      <div
        style={{
          paddingTop: "150px",
          paddingLeft: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
            width: "800px",
            border: "1px solid lightgray",
            borderRadius: "15px",
            padding: "50px",

            fontWeight: "bold",
          }}
        >
          {product.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>About</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {product.map((product, index) => (
                  <tr key={index}>
                    <td style={{ padding: "20px" }}>{index + 1}</td>
                    <td style={{ padding: "20px" }}>{product.name}</td>
                    <td style={{ padding: "20px" }}>{product.price}</td>
                    <td style={{ padding: "20px" }}>{product.description}</td>
                    <td style={{ padding: "20px" }}>{product.about}</td>
                    <td style={{ padding: "20px" }}>
                      {product.image && (
                        <img
                          src={product.image}
                          alt="img"
                          style={{
                            height: "110px",
                            width: "150px",
                            objectFit: "contain",
                          }}
                        />
                      )}
                    </td>
                    <td style={{ padding: "20px" }}>
                      <button
                        style={{
                          backgroundColor: "blue",
                          borderRadius: "5px",
                          width: "50px",
                          border: "none",
                          color: "white",
                          // padding:"6px"
                        }}
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>{" "}
                      <br />
                      <button
                        style={{
                          backgroundColor: "red",
                          borderRadius: "5px",
                          width: "50px",
                          border: "none",
                          color: "white",
                          // padding:"6px"
                        }}
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h3>
              <u> No Products Available. </u>
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
