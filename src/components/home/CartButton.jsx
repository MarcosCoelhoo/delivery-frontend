import React from 'react';
import { ShoppingCartSimple } from '@phosphor-icons/react';
import { CartContext } from '../contexts/CartContext';

const CartButton = ({ className }) => {
  const { isOpenCart, setIsOpenCart } = React.useContext(CartContext);

  function handleModal() {
    setIsOpenCart(!isOpenCart);
  }

  return (
    <button onClick={handleModal} className={className}>
      <ShoppingCartSimple size={32} weight="duotone" />
    </button>
  );
};

export default CartButton;
