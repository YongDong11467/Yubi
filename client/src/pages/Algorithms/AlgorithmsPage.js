import React, { Component } from 'react'
import AlgInfo from '../../components/AlgInfo'
import { ListGroup } from 'react-bootstrap';

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
                <ListGroup defaultActiveKey="#link1">
                    {this.state.algorithms.map(alg => (
                        <ListGroup.Item action href="#link1">
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
                <AlgInfo />
            </div>
        )
    }
}
