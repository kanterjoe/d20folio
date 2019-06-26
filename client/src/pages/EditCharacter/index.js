import React from 'react';
import API from '../../util/API';
import {Input, Button, Form, FormGroup, Label, Col, Row, Container, Jumbotron} from 'reactstrap'
export default class EditCharacter extends React.Component {
    state = {
        name: "SpongeBob the Wise",
        imageUrl: "https://vignette.wikia.nocookie.net/p__/images/c/cb/SpongeBob_SquarePants_Render.png/revision/latest?cb=20190120193322&path-prefix=protagonist",

        //Stats:
        STR: "10",
        DEX: "10",
        CON: "10",
        INT: "10",
        WIS: "10",
        CHA: "10",
    }
    handleInput = field => event => {
        const {value} = event.target;
        this.setState( {
            [field] : value
        })
    }
    clearForm = () => {
        
    }
    submitCharacterCreation = () => {
        const newChar = {
            name: this.state.name,
            imageUrl: this.state.imageUrl,
            //Stats:
            STR: this.state.STR,
            DEX: this.state.DEX,
            CON: this.state.CON,
            INT: this.state.INT,
            WIS: this.state.WIS,
            CHA: this.state.CHA,
        }
        API.createCharacter(newChar)
            .then(() => this.clearForm())
    }
    render() {
        return (
            this.props.new? 
            <Container>
                <Jumbotron><h1>Create a new Character</h1></Jumbotron>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Character Name</Label>
                            <Input 
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInput("name")}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Image Url</Label>
                            <Input 
                                name="Image"
                                value={this.state.imageUrl}
                                onChange={this.handleInput("imageUrl")}
                            />
                        </FormGroup>
                        <img alt="" src={this.state.imageUrl} className="img-thumbnail rounded"/>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label>Strength</Label>
                            <Input 
                                name="Str"
                                value={this.state.STR}
                                onChange={this.handleInput("STR")}
                                type="number"
                                min="3" max="18"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Dexterity</Label>
                            <Input 
                                name="Dex"
                                value={this.state.DEX}
                                onChange={this.handleInput("DEX")}
                                type="number"
                                min="3" max="18"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Constitution</Label>
                            <Input 
                                name="Con"
                                value={this.state.CON}
                                onChange={this.handleInput("CON")}
                                type="number"
                                min="3" max="18"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Intelligence</Label>
                            <Input 
                                name="Int"
                                value={this.state.INT}
                                onChange={this.handleInput("INT")}
                                type="number"
                                min="3" max="18"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Wisdom</Label>
                            <Input 
                                name="Wis"
                                value={this.state.WIS}
                                onChange={this.handleInput("WIS")}
                                type="number"
                                min="3" max="18"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label>Charisma</Label>
                            <Input 
                                name="Cha"
                                value={this.state.CHA}
                                onChange={this.handleInput("CHA")}
                                type="number"
                                min="3" max="18"
                            />
                        </FormGroup>
                    </Col>
                    
                </Row>
                <Row>
                    <Col md={12}>
                        <Button onClick={this.submitCharacterCreation}>
                            Create Character
                        </Button>
                    </Col>
                </Row>
            </Container>
            : null
        )
    }
}