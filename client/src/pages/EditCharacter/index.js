import React from 'react';
import API from '../../util/API';
import {Input, Button, FormGroup, Label, Col, Row, Container, Jumbotron} from 'reactstrap'
import StatCard from "../../components/StatCard";
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

        //Array of Stat Names:
        statArray: ["STR", "DEX", "CON", "INT", "WIS", "CHA"],
    }
    handleInput = field => event => {
        const {value} = event.target;
        this.setState( {
            [field] : value
        })
    }
    clearForm = () => {
        this.setState({Name: "", imageUrl: "",
        STR: "10", DEX: "10", CON: "10",
        INT: "10", WIS: "10", CHA: "10"});
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
    lowerStat = field => {
        if(this.state[field] > 3){
            let value = parseInt(this.state[field])-1
            this.setState({[field]: value.toString()})
        }
        console.log(this.state[field]);
    }

    increaseStat = field => {
        if(this.state[field] < 18){
            let value = parseInt(this.state[field])+1
            this.setState({[field]: value.toString()})
        }
        console.log(this.state[field]);
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
                        <img alt="" src={this.state.imageUrl} width="500px" className="img-thumbnail rounded"/>
                    </Col>
                    <Col md={6}>
                    {this.state.statArray.map(stat => (
                            <StatCard name={stat} state={this.state[stat]}
                            decFunction={() => this.lowerStat(stat)}
                            incFunction={() => this.increaseStat(stat)}/>
                        ))}
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