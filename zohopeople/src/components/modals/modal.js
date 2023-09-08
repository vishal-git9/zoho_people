import React from 'react'
import { View } from 'react-native';
import Modal from "react-native-modal";

export const ModalComponent = ({children,modalVisible}) => {
  return (
    <>
    <Modal isVisible={modalVisible}>
      {children}
    </Modal>
  </>
  )
}
