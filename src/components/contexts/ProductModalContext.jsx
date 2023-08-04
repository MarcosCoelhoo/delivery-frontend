import React from 'react';

export const ProductModalContext = React.createContext();

export const ProductModalStorage = ({ children }) => {
  const [product, setProduct] = React.useState(null);

  return (
    <ProductModalContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductModalContext.Provider>
  );
};
