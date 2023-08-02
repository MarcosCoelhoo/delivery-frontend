import React from 'react';

export const CartContext = React.createContext();

export const CartStorage = ({ children }) => {
  const [isOpenCart, setIsOpenCart] = React.useState(false);
  const containerRef = React.useRef();
  const modalRef = React.useRef();

  React.useEffect(() => {
    const body = document.body;
    if (isOpenCart) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
    return () => {
      body.style.overflow = '';
    };
  }, [isOpenCart]);

  React.useEffect(() => {
    if (modalRef.current) {
      modalRef.current.scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'smooth',
      });
    }
  }, [isOpenCart]);

  React.useEffect(() => {
    const size = window.innerWidth;

    if (size > 900) {
      setIsOpenCart(true);
    } else {
      setIsOpenCart(false);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{ isOpenCart, setIsOpenCart, containerRef, modalRef }}
    >
      {children}
    </CartContext.Provider>
  );
};
