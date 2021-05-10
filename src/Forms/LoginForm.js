import { useState } from "react"
import { Button, Modal } from "react-bootstrap";

function LoginForm(props)
{
    const[show, setShow]=useState(true);

    const handleClose = () => 
    {
        setShow(false);
        props.onClose("Failure");
    }

    const handleLogin = () => 
    {
        setShow(false);
        props.onClose("Success");
    }


 return(
     <>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header>
      <Modal.Title>Login</Modal.Title>
    </Modal.Header>
    <Modal.Body>Login here</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="primary" onClick={handleLogin}>
        Login
      </Button>
    </Modal.Footer>
    </Modal>
    </>);
}

export default LoginForm;