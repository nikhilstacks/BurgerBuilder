import React from "react";
import ModalCss from "./Modal.module.css";

// this modal is basically pops out when we click on order now
const Modal = (props) => <div className={ModalCss.Modal}>{props.children}</div>;

export default Modal;
