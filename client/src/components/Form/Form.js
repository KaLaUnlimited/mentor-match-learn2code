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

export default class Form extends React.Component {
constructor(props){
  super(props);
  this.state ={
    username:'',
    email: ''
  };
   this.handleSubmit = this.handleSubmit.bind(this);
}



handleSubmit(event,err){
  event.preventDefault();
  const target = event.target;
  const name = target.name;
  if (err) throw err;
  console.log(name);
  this.setState({
      [name]: value
    });
}



    render() {
        return (
            <form>
                <input
                    id="formControlsText"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleSubmit}
                    label="Username"
                    placeholder="Enter username"
                />
                <input
                    id="formControlsEmail"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleSubmit}
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

                <Button type="submit">Submit</Button>
            </form>
        );
    }

}
