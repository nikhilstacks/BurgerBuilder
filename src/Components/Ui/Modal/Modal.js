import React from "react";
import ModalCss from "./Modal.module.css";

const Modal = (props) => <div className={ModalCss.Modal}>{props.children}</div>;

export default Modal;
