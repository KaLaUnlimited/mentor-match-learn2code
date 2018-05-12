import React, { Component } from "react";
import Container from "../components/Container";
import Column from "../components/Column";
import Row from "../components/Row";
import Footer from "../components/Footer";
import TechPath from "../components/DashCards/TechPath";
import PrevConnect from "../components/DashCards/PreviousConnections";
import Resources from "../components/DashCards/MyResources";
import API from "../utils/API";
import "./DashboardPage.css";

class DashboardPage extends Component {


  constructor(props) {
    super(props);

    this.state = {
           profile: {} 
        };
  }

  componentWillMount() {
    this.dashDetails();
  }

  dashDetails() {

    const { userProfile, getProfile } = this.props.auth;
    let email=" ";
    let name= " ";

    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });

        name=this.state.profile.name;

        var n = name.search("@");
        if (n === 0){
          email=this.state.profile.nickname+"@gmail.com"
          console.log("state email: ", email);
        } else {
          email=this.state.profile.name
          console.log("state email: ", email);
        }

      });
    } else {
      this.setState({ profile: userProfile });

      name=this.props.auth.userProfile.name;
      
      var n = name.search("@");
      if (n === 0){
        email=this.props.auth.userProfile.nickname+"@gmail.com"
        console.log("auth email: ", email);
      } else {
        email=this.props.auth.userProfile.name
        console.log("auth email: ", email);
      }
      
    }

    API.userPreference(email)
       .then ((res, req) => {
        console.log("success")
        console.log("res: ", res,"req: ", req);
      })
      .catch(err => {
        console.log("userPreference failed");
        console.log(err.response.data);
      });    
  }


  render() {
    const { profile } = this.state;

    return (
      <div className="dash">
        {/* <Nav title="Mentor Match" /> */}

        <div className="container-profile-dash">
          <h1>{profile.name}</h1>
          <div className="profile-area-dash">
            <img src={profile.picture} alt="" />
          </div>
        </div>

        <Container>
          <Row>
            <Column size="md-4 sm-3">
              <PrevConnect />
            </Column>
            <Column size="md-4 sm-3">

            <TechPath auth={this.props.auth} />

            </Column>
            <Column size="md-4 sm-3">
              <Resources />
            </Column>
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default DashboardPage;

