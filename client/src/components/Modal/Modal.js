import React from "react";
import {
  Button,
  Modal,
  OverlayTrigger,
  Popover,
  Tooltip
} from "react-bootstrap";
import "./Modal.css";
import Form from "../Form/Form.js";

const Interests = props => {
  const popover = (
    <Popover id="modal-popover" title="popover">
      very popover. such engagement
    </Popover>
  );

  const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

  return (
    <div>
      <Button
        className="tech-btn pull-right"
        bsSize="medium"
        onClick={props.handleShow}
      >
        Choose your Path
      </Button>

      <Modal className="modal" show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose your Path</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form {...props} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Interests;
