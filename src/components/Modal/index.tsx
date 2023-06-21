import { useState } from 'react';
import { ContainerContent, ContainerModal, HeaderModal } from './style';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ContainerModal>
      <ContainerContent>
        <HeaderModal>
          <h2>Carrinho de Compras</h2>
          <button onClick={closeModal}>X</button>
        </HeaderModal>
        <div>
          <ul>
            <li>Carrinho Vazio</li>
          </ul>
        </div>
      </ContainerContent>
    </ContainerModal>
  );
};

export default Modal;