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

 function sendtoDatab(e){
   e.preventDefault();
   alert("This value"+this.value);
 // userInput={}
 //  axios.post('api/path', formControlsText, formControlsEmail)
 //  .then(function(response){
 //    console.log(response);
 //  })
 //  .catch(function(error){
 //    console.log(error);
 //  });
};

export default class Form extends React.Component {

    render() {
        return (
            <form>
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    value={this.value}
                    label="Username"
                    placeholder="Enter username"
                />
                <FieldGroup
                    id="formControlsEmail"
                    type="email"
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

                <Button onclick={sendtoDatab} type="submit">Submit</Button>
            </form>
        );
    }

}
