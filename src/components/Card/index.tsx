import React, { useContext } from 'react'
import { ProductContext } from '../../contexts/CartContext';
import { iProduct } from '../../contexts/CartContext/@types';
import { ButtonGreyAdd } from '../../styles/Styles';
import { ImgCard, LiProduct } from './style';

interface iCardProps {
  img: string;
  name: string;
  category: string;
  price: number;
  id: number;
  index: number;
  product: iProduct;
}

const ProductCard = ({id, category, img, price, name, index, product}: iCardProps) => {

  return (
    <LiProduct>
      <ImgCard src={img} alt="" />
      <h2>{name}</h2>
      <h3>{category}</h3>
      <p> R$ {price.toFixed(2)}</p>
      <ButtonGreyAdd>Adicionar</ButtonGreyAdd>
    </LiProduct>
  )
}

export default ProductCard