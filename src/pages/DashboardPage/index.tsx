import React, { useContext } from 'react'
import ProductCard from '../../components/Card';
import { ProductContext } from '../../contexts/CartContext';
import { DivIcons, HeaderDash, UlProducts } from './style';
import logo from "../../assets/logo.png"
import { FaSearch, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { ImgLogo } from '../LoginPage/style';
import { UserContext } from '../../contexts/UserContext';
import { useState } from 'react';
import Modal from '../../components/Modal';


const DashboardPage = () => {

  const { productList } = useContext(ProductContext);
  const { userLogout } = useContext(UserContext)

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  

 
  return (
    <div>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
      <HeaderDash>
        <ImgLogo src={logo} alt="" />
        <DivIcons>
        <FaSearch />
        <FaShoppingCart onClick={openModal}/>
        <FaSignOutAlt onClick={() => userLogout()}/>
        </DivIcons>
      </HeaderDash>
      <UlProducts>
        {productList?.map((product, index) => {
          return <ProductCard
          index={index}
          key={index}
          name={product.name}
          category={product.category}
          price={product.price}
          img={product.img}
          id={product.id}
          product={product}
        />
        })}
      </UlProducts>
    </div>
  )
}

export default DashboardPage
