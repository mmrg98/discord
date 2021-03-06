import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

//action
import { reset } from "../redux/actions";

// components
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function ErrorAlert({ reset, error }) {
  const [show, setShow] = useState(true);
  const history = useHistory();

  const handleClose = () => {
    reset();
    setShow(false);
    history.push("/");
  };

  if (show) {
    return (
      <>
        <Alert variant="danger" onClose={() => handleClose()} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{error}</p>
        </Alert>
        <Button variant="warning" onClick={() => handleClose()}></Button>
      </>
    );
  }
}
const mapStateToProps = ({ authRes }) => ({
  error: authRes.errorMessage,
});
const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorAlert);
