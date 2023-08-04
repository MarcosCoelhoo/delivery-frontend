import React from 'react';

export const CartContext = React.createContext();

export const CartStorage = ({ children }) => {
  const [isOpenCart, setIsOpenCart] = React.useState(false);
  const containerRef = React.useRef();
  const size = window.innerWidth;

  React.useEffect(() => {
    const body = document.body;
    if (isOpenCart && size < 900) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
    return () => {
      body.style.overflow = '';
    };
  }, [isOpenCart, size]);

  React.useEffect(() => {
    if (size > 900) {
      setIsOpenCart(true);
    } else {
      setIsOpenCart(false);
    }
  }, [size]);

  return (
    <CartContext.Provider
      value={{ isOpenCart, setIsOpenCart, containerRef, size }}
    >
      {children}
    </CartContext.Provider>
  );
};
