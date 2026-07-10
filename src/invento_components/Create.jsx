import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
const Create = () => {
  const [data, setData] = useState({ name: "", qty: "" });
  const { setProducts } = useContext(ProductContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.name.trim() || !data.qty.toString().trim()) {
      alert("Please fill in all fields.");
      return;
    }
    const newProduct = {
      id: Math.floor(Math.random() * 100000000),
      name: data.name.trim(),
      qty: Number(data.qty),
    };
    setProducts((prev) => [...prev, newProduct]);
    console.log("Product added:", newProduct);
    setData({ name: "", qty: "" });
  };

  return (
    <div>
      <div className="row text-center formy">
        <div className="col-md-6 offset-md-3">
          <h3>Add Product</h3>
        </div>
        <div className="col-md-8 offset-md-2">
          <form className="py-3 px-5 brr" onSubmit={handleSubmit}>
            <div className="row my-4">
              <div className="col-md-7">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="product name"
                  value={data.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-3">
                <input
                  type="number"
                  name="qty"
                  className="form-control"
                  placeholder="Qty"
                  value={data.qty}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-2 text-end">
                <input
                  type="submit"
                  defaultValue="Add Product"
                  className="btn btn-primary mine"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;