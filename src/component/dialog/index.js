import React from "react";
import { Modal } from "react-bootstrap";
import ContactForm from "../contactform"; // Your Contact Form Component

const ModalComponent = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactForm />
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
