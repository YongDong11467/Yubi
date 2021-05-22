import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap';

//TODO: Table of most search algorithms

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        YUBI is a simple easy to use platform for fellow hackers to shared knowledge of algorithms
                    </p>
                    <p>
                        <Button variant="primary">Sign up</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}
