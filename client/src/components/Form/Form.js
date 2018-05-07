import React from "react";
import { FormControl, HelpBlock, Button, FormGroup, ControlLabel, Checkbox, Radio } from 'react-bootstrap';

// function FieldGroup({ id, label, help, ...props }) {
//     return (
//         <FormGroup controlId={id}>
//             <ControlLabel>{label}</ControlLabel>
//             <FormControl {...props} />
//             {help && <HelpBlock>{help}</HelpBlock>}
//         </FormGroup>
//     );
// };

 // function sendtoDatab(e ,err){
 //   e.preventDefault();
 //   if (err) throw err;
 //   alert("This value"+this.value);
 // userInput={}
 //  axios.post('api/path', formControlsText, formControlsEmail)
 //  .then(function(response){
 //    console.log(response);
 //  })
 //  .catch(function(error){
 //    console.log(error);
 //  });
// };
function log(event,err){
  event.preventDefault();
  if(err) throw err;
  alert("user name"+this.state.username);
}

export default class Form extends React.Component {
constructor(props){
  super(props);
  this.state ={
    username:'',
    email: ''
  };
   this.handleSubmit = this.handleSubmit.bind(this);
}


handleInputChange = event =>{
  const{name,value}= event.target;
  this.setState({
      [name]: value
    });
}


handleSubmit(event,err){
  event.preventDefault();
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
  if (err) throw err;
  console.log(this.state.username);
  console.log(this.state.email);

}



    render() {
        return (
            <form>
                <input
                    id="formControlsText"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    label="Username"
                    placeholder="Enter username"
                />
                <input
                    id="formControlsEmail"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    label="Email address"
                    placeholder="Enter email"
                />

                <FormGroup>
                    <Checkbox>HTML</Checkbox>
                    <Checkbox>CSS</Checkbox>
                    <Checkbox>JavaScript</Checkbox>
                    <Checkbox>jQuery</Checkbox>
                    <Checkbox>Git</Checkbox>
                    <Checkbox>MongoDB</Checkbox>
                    <Checkbox>Express.js</Checkbox>
                    <Checkbox>Node.js</Checkbox>
                    <Checkbox>React.js</Checkbox>
                </FormGroup>

                <Button onClick={this.handleSubmit} type="submit">Submit</Button>
            </form>
        );
    }

}
