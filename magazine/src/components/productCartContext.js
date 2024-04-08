import React, { createContext, useState } from "react";

export const productContext = createContext([]);

// export const ProductProvider = ({ children }) => {
//     const [products, setProducts] = useState([]);

//     const addProductToCart = (product) => {
//         setProducts([...products, product]);
//     };

//     const removeProductFromCart = (productName) => {
//         const updatedProducts = products.filter(product => product.name !== productName);
//         setProducts(updatedProducts);
//     };

//     const cleanCart = () => {
//         setProducts([]);
//     };

//     return (
//         <productContext.Provider
//             value={{
//                 products,
//                 addProductToCart,
//                 removeProductFromCart,
//                 cleanCart
//             }}
//         >
//             {children}
//         </productContext.Provider>
//     );
// };
