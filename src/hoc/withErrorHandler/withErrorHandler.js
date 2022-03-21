import React, { Component } from "react";
import Aux from "../Auxiliary";
import Modal from "../../Components/Ui/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    componentDidMount() {
      axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }
    state = {
      error: null,
    };

    clickHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Aux>
          <Modal show={this.state.error} hide={this.clickHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
