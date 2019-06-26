import React from 'react';
import {Button, FormGroup, Label,
    Input, InputGroup, InputGroupAddon} from 'reactstrap';

const StatCard = props => (
            <FormGroup>
                <Label>{props.name}</Label>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <Button color="danger" onClick={props.decFunction}>-</Button>
                    </InputGroupAddon>                    
                    <Input type="text" disabled={true} value={props.state}/>
                    <InputGroupAddon addonType="append">
                    <Button color="success" onClick={props.incFunction}>+</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        )

        export default StatCard;