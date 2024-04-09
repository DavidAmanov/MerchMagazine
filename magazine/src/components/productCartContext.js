import  { createContext, useContext, useState} from "react";

export const productContext = createContext( [] );
export const ProductProvider = productContext.Provider;

export function useProductContext(){
    return useContext(productContext);
}

export function useAddProductToContext() {
    const products = useProductContext();
    const [ countProduct, setCountProduct ] = useState(0);

function addProductToContext(productName) {
    if (products.some((product) => product.name === productName)) {
      const index = products.findIndex((pokemon) => pokemon.name === productName);
      products[index].value = products[index].value + 1;
    } else {
      products.push({ name: productName, value: countProduct + 1 });
    }
    console.log(products);
    setCountProduct(countProduct + 1)
  }

  return addProductToContext;
}

