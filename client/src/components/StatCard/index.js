import React from 'react';
import {Button, FormGroup, Label,
    Input, InputGroup, InputGroupAddon} from 'reactstrap';
import './style.css';

const StatCard = props => (
            <FormGroup className="form-group">
                <Label>{props.name}</Label>
                <InputGroup className="stat-container">
                    <InputGroupAddon addonType="prepend">
                        <Button color="danger" onClick={props.decFunction}>-</Button>
                    </InputGroupAddon>                    
                    <Input className="stat-display" type="text" disabled={true} value={props.state}/>
                    <InputGroupAddon addonType="append">
                    <Button color="success" onClick={props.incFunction}>+</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        )

        export default StatCard;