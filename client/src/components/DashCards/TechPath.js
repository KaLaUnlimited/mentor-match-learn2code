import React from "react";
import "./DashCards.css";
import Interests from "../Modal/Modal.js";
import UserTechList from "../UserTechList/UserTechList"
import API from "../../utils/API";



class TechPath extends React.Component {

state = {
  technologies: {}
}

  componentDidMount() {
    this.loadPreferences();
  }

  loadPreferences = () => {
    console.log("KLKLKLKL")
    //const email = this.props.auth.grabInfo().email
    //  email.toString();
    // console.log(email )
    const d = {
      email: 'jones.nadia.l@gmail.com'
    }
    API.userPreference(d).then(res => {
      console.log("front end preferences has been sent and received!!Preferences below:");
      console.log(res.data);
      this.setState({
        technologies: res.data
      });
    })
      .catch(err => console.log("fail"));
    /*  }); */
  };
  
  render() {
    
   
    
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">My Technology Path</h3>
            <Interests auth={this.props.auth}/>
            
          </div>
          <div className="panel-body">
            <UserTechList
            tech = {this.state.technologies[0]}
             />
          
          </div>
        </div>
      </div>
    )
  }
}

export default TechPath;
