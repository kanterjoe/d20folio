import React from 'react';
import {Col, Row, Container, Jumbotron} from 'reactstrap'
import seeds from './charSeeds.json';

export default class ViewAllCharacters extends React.Component {
    state = {
        characters: seeds
    }
    componentDidMount () {

    }
    render () {
        return (
        <Container>
            <Row>
                <Col md={12}>
                    <Jumbotron>
                        <h1>Welcome to D20Folio!</h1>
                        <p>Here are all the characters:</p>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    {
                        this.state.characters.map( (character, id) => (
                            <div>
                                {character.name}
                                <img src={character.imageUrl} alt=""/>
                            </div>
                        ))
                    }
                </Col>
            </Row>
        </Container>
        );
    }
}