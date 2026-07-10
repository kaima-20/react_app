import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Products = () => {
  const { products, setProducts } = useContext(ProductContext); //destructuring the value inside provider
  var k = 1;
  return (
    <div class="row products text-center">
      <div class="col-md-6 offset-md-3">
        <h3>Products Inventory </h3>
      </div>
      <div class="col-md-8 offset-md-2">
        <table class="table table-light">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.length > 0 &&
              products.map(function (pro) {
                return (
                  <tr key={pro.id}>
                    <td>{k++}</td>
                    <td>{pro.name} </td>
                    <td>{pro.qty}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          setProducts(
                            products.filter((item) => item.id !== pro.id),
                          )
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            {/* <tr>
                      <td>1</td>
                      <td>Greek Yougurt Parfait</td>
                      <td>5</td>
                      <td><button className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>1l Apple Cider Vinegar</td>
                      <td>3</td>
                      <td><button className="btn btn-danger btn-sm">Delete</button></td>
                    </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;