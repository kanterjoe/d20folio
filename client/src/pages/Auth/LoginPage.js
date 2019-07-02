import React from 'react';
import {Container, Col, Row, Input, Form, Button, Jumbotron} from 'reactstrap';

class SignupPage extends React.Component {
    state = {
        username: "",
        password: "",
    }

    validateFormInfo = () => {
        const rules = [
            state => state.username.length >= 3,
            state => state.password.length >= 6,
        ];

        if (rules.map(rule => rule(this.state)).every()) {
            return true;
        }
        else return false;
    }
    handleInput = field => event => {
        this.setState({[field]: event.target.value})
    }
    handleSubmit = () => {
        //Need to fill this out
        console.log("Valid input:", this.validateFormInfo(), " state: ", this.state)
    }

    render () {
        return (
            <Container>
                <Row>
                <Col md={4}></Col>
                <Col md={4}>
                    <Form>
                        <Jumbotron>
                            <Input 
                                value={this.state.username}
                                placeholder="Enter Username"
                                onChange={this.handleInput("username")}

                            />
                            <Input 
                                value={this.state.password}
                                placeholder="Enter Password"
                                onChange={this.handleInput("password")}

                            />
                            <Button onClick={this.handleSubmit}>
                                Log In!
                            </Button>
                        </Jumbotron>
                    </Form>
                </Col>
                <Col md={4}></Col>
                </Row>
            </Container>
        )
    }
}