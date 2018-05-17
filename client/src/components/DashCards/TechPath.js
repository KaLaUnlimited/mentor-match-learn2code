import React from "react";
import "./DashCards.css";
import Modal from "../Modal/Modal.js";
import UserTechList from "../UserTechList/UserTechList";
import API from "../../utils/API";
import axios from "axios";
import auth from "../Auth/Auth.js";

class TechPath extends React.Component {
  constructor() {
    super();

    // Global State for Interest and UserTechList Component
    this.state = {
      show: false,
      email: ""
    };
  }

  componentDidMount = () => {
    this.setState({ email: this.props.auth.grabInfo().email });

    this.getUserPrefence();
  };

  // Sending the entire state to DB on Click
  handleSubmit = (event, err) => {
    event.preventDefault();

    console.log(
      "this is what is selected on the from before sending to backend:"
    );
    API.updateUserProfile(this.state).then(res => {
      console.log("this is response for api updated:");
      console.log("Data Message: ", res.data);
    });
  };

  // Geting User Inputs
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // Closing Modal
  handleClose = () => {
    this.setState({ show: false });
  };

  // Opening Modal
  handleShow = () => {
    this.setState({ show: true });
  };

  getUserPrefence = () => {
    // TODO
    // Get data (Prefereces) from DB
    // Update the Global State
  };

  render() {
    console.log("Global State: ", this.state);
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">My Technology Path</h3>
            <Modal
              auth={this.props.auth}
              handleClose={this.handleClose}
              handleShow={this.handleShow}
              {...this.state}
              handleSubmit={this.handleSubmit}
              handleInputChange={this.handleInputChange}
            />
          </div>
          <div className="panel-body">
            <UserTechList data={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default TechPath;
