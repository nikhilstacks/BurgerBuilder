import React from "react";
import ModalCss from "./Modal.module.css";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";

// this modal is basically pops out when we click on order now
const Modal = (props) => (
  <Aux>
    <Backdrop show={props.show} hidden={props.hide} />
    <div
      className={ModalCss.Modal}
      style={{
        transform: props.show ? "translate(0)" : "translate(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default React.memo(Modal);
