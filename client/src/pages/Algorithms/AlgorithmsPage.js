import React, { Component } from 'react'
import AlgInfo from '../../components/AlgInfo/AlgInfo'
import { Container, ListGroup } from 'react-bootstrap';

import './algorithmspage.css'

export default class AlgorithmsPage extends Component {

    constructor() {
        super();
        this.state = {
          algorithms: ["Quick sort", "Sliding Window", "BFS"]
        };
    }

    algorithmClicked(e) {
        alert('You clicked the third ListGroupItem');
    }

    render() {
        return (
            <div>
                <Container>
                    <div className="split sidebar">
                        <ListGroup defaultActiveKey="#link1">
                            {this.state.algorithms.map(alg => (
                                <ListGroup.Item action href="#link1" key={alg}>
                                {alg}
                                </ListGroup.Item>
                            ))}
                            {/* <ListGroup.Item action href="#link1">
                            Link 1
                            </ListGroup.Item>
                            <ListGroup.Item action href="#link2" disabled>
                            Link 2
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={() => this.algorithmClicked}>
                            This one is a button
                            </ListGroup.Item> */}
                        </ListGroup>
                    </div>

                    <div className="split algdetails">
                        <AlgInfo />
                    </div>
                </Container>
            </div>
        )
    }
}
