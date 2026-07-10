import  { createContext, useState } from "react";

//1 create context: createcontext()

export const ProductContext = createContext(); //empty tank

//2. provider: a supercomponent

export const ProductProvider = ({ children }) => {
  //send a request to an api endpoint that return all products inside inventory table
  var response = [
    { id: 1, name: "black Glasses", qty: 2 },
    { id: 2, name: "food", qty: 5 },
  ];

  const [products, setProducts] = useState(response);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};