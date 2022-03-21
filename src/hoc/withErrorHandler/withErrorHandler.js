import React from "react";
import Aux from "../Auxiliary";
import Modal from "../../Components/Ui/Modal/Modal";

const withErrorHandler = (WrappedComponent) => {
  return (props) => {
    return (
      <Aux>
        <Modal show>Something went wrong!!</Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};

export default withErrorHandler;
