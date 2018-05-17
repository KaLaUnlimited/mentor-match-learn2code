import React from "react";
import PropTypes from "prop-types";

import {
  FormControl,
  HelpBlock,
  Button,
  FormGroup,
  ControlLabel,
  Checkbox,
  Radio
} from "react-bootstrap";

const Form = (props) => {
  return(
    <form>
        <input
          id="formControlsText"
          type="text"
          name="username"
          // value={this.state.username}
          onChange={props.handleInputChange}
          label="Username"
          placeholder="Enter username"
        />
        <input
          id="formControlsEmail"
          type="email"
          name="email"
          value={props.email}
          onChange={props.handleInputChange}
          label="Email address"
          placeholder="Enter email"
        />

        <FormGroup>
          <Checkbox
            type="checkbox"
            onChange={props.handleInputChange}
            name="html"
            value="true"
          >
            HTML
          </Checkbox>
          <Checkbox
            type="checkbox"
            onChange={props.handleInputChange}
            name="css"
            value="true"
          >
            CSS
          </Checkbox>
          <Checkbox
            type="checkbox"
            onChange={props.handleInputChange}
            name="javascript"
            value="true"
          >
            JavaScript
          </Checkbox>
          <Checkbox
            type="checkbox"
            onChange={props.handleInputChange}
            name="jquery"
            value="true"
          >
            jQuery
          </Checkbox>
          <Checkbox
            type="checkbox"
            onChange={props.handleInputChange}
            name="mongodb"
            value="true"
          >
            MongoDB
          </Checkbox>
          <Checkbox
            type="checkbox"
            onChange={props.handleInputChange}
            name="nodejs"
            value="true"
          >
            Node.js
          </Checkbox>
          <Checkbox
            type="checkbox"
            onChange={props.handleInputChange}
            name="mentee"
            value="true"
          >
            Are you a mentee?
          </Checkbox>
          <Checkbox
            type="checkbox"
            onChange={props.handleInputChange}
            name="mentor"
            value="true"
          >
            Would you like to mentor?
          </Checkbox>
        </FormGroup>

        <Button onClick={props.handleSubmit} type="submit">
          Submit
        </Button>
      </form>
  );
};


Form.propTypes = {
  handleInputChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  email: PropTypes.string
};
export default Form;