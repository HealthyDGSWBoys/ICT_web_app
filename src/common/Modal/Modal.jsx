import React from "react";
import * as M from "./Modal.style";

const Modal = ({ name, visible, children, }) => {
  return (
    <>
      <M.ModalOverlay visible={visible} tabIndex="-1" />
      {/* <M.ModalWrapper visible={visible}>
        <M.ModalInner tabIndex="0">
        {children}
        </M.ModalInner>
        </M.ModalWrapper> */}
    </>
  );
};

export default Modal;
