import { useState } from "react";

const productData = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    imgUrl:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Headphones",
    category: "Electronics",
    imgUrl:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "T-Shirt",
    category: "Clothing",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Chocolate",
    category: "Food",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1675283825474-390ea83c0703?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function App() {
  const [input, setInput] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts = productData.filter((data) => {
    const matchedSearch = data.name.toLowerCase().includes(input.toLowerCase());

    const matchedCategory =
      activeTab === "all"
        ? true
        : data.category.toLowerCase() === activeTab.toLowerCase();

    return matchedSearch && matchedCategory;
  });

  const clearInput = () => {
    setInput("");
    setActiveTab("all");
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-primary py-3 py-sm-4 py-md-5">
      <div className="container bg-white rounded-5 p-5 m-3 m-sm-0">
        <h2 className="text-primary text-center mb-4">Product Filter App</h2>

        <div className="mb-4 d-flex gap-2 flex-column flex-sm-row">
          <input
            type="search"
            className="form-control"
            name=""
            id=""
            aria-describedby="helpId"
            placeholder="Search Products..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />

          <button type="button" className="btn btn-danger" onClick={clearInput}>
            Clear
          </button>
        </div>

        <ul className="nav nav-pills d-flex flex-wrap mb-4 gap-3 justify-content-center">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "all" ? "active" : null}`}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "electronics" ? "active" : null}`}
              onClick={() => setActiveTab("electronics")}
            >
              Electronics
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "clothing" ? "active" : null}`}
              onClick={() => setActiveTab("clothing")}
            >
              Clothing
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "food" ? "active" : null}`}
              onClick={() => setActiveTab("food")}
            >
              Food
            </button>
          </li>
        </ul>

        <div className="container">
          <div className="row gap-3 justify-content-center">
            {filteredProducts.length === 0 ? (
              <p className="text-center">No results found.</p>
            ) : (
              filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="card col-12 col-sm-6 col-md-4 col-lg-2 px-0"
                >
                  <img
                    src={prod.imgUrl}
                    className="card-img-top"
                    alt={prod.name}
                  />
                  <div className="card-body">
                    <h6 className="card-title text-center">{prod.name}</h6>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
