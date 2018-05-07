import React from "react";
import { FormControl, HelpBlock, Button, FormGroup, ControlLabel, Checkbox, Radio } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
};

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
constructor(){
  super();
  this.state ={
    username:'',
    email: ''
  }
  // this.handleSubmit = this.handleSubmit.bind(this);
}



handleSubmit(event,err){
  event.preventDefault();
  if (err) throw err;
  console.log(event.value);

}


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    name="username"
                    label="Username"
                    placeholder="Enter username"
                />
                <FieldGroup
                    id="formControlsEmail"
                    type="email"
                    name="email"
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
