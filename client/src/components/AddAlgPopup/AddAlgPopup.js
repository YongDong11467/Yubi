import React, { useState } from "react";
import { Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

import axios from 'axios'

function AddAlgPopup() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [algForm, setAlgForm] = useState({
        algname: "",
        description: "",
        sourceCode: ""
    });

    function handleFormChange(event) {
        setAlgForm({ ...algForm, [event.target.name]: event.target.value });
    }

    function addClick() {
        console.log(algForm)
        const algBody = {
          name: algForm.algname,
          description: algForm.description,
          sourceCode: algForm.sourceCode
        };
    
        axios.post("/routes/algorithm/add", algBody).then(res => {
          console.log("Posted Algorithm")
          handleClose();
          alert("Successfully Posted Algorithm")
        });
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Algorithm
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Algorithm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Algorithm Name</Form.Label>
                    <Form.Control placeholder="Enter Algorithm Name" name="algname" onChange={handleFormChange}/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={8} name="description" onChange={handleFormChange}/>
                </Form.Group>
                {/* <Form.File id="exampleFormControlFile1" label="Source Code" />
                <Form.Text className="text-muted">
                Attach Source Code
                </Form.Text> */}

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Source Code</Form.Label>
                    <Form.Control as="textarea" rows={8} name="sourceCode" onChange={handleFormChange}/>
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addClick}>Add to list</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default AddAlgPopup;