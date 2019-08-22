import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxelement";
const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    constructor(props) {
      super();
      this.reqIntercepter = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resIntercepter = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
      this.state = {
        error: null
      };
    }
    
    componentWillUnmount(){
        axios.interceptors.request.eject(this.reqIntercepter);
        axios.interceptors.response.eject(this.resIntercepter);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Aux>
          <Modal
            modalClosed={this.errorConfirmedHandler}
            show={this.state.error}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default withErrorHandler;
