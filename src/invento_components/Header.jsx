//to consume what is inside a provider
//1.import a hook: const{} = useContext(ProviderName)
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Header = () => {
  const{products} = useContext(ProductContext); //destructuring the value inside provider
  return (
 <div class="row header">
            <div class="col text-center">
                <h1 class='mb-3'> Product Inventory </h1>
                <button type="button" class="btn btn-primary">
                    Count <span class="badge  mine">{products.length}</span>
                </button>
            </div>
        </div>  )
}

export default Header