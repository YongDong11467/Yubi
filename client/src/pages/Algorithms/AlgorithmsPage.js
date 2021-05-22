import React, { Component } from 'react'
import AlgInfo from '../../components/AlgInfo'
import { ListGroup } from 'react-bootstrap';

export default class AlgorithmsPage extends Component {

    algorithmClicked() {
        alert('You clicked the third ListGroupItem');
    }

    render() {
        return (
            <div>
                <ListGroup defaultActiveKey="#link1">
                    <ListGroup.Item action href="#link1">
                    Link 1
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2" disabled>
                    Link 2
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={this.algorithmClicked}>
                    This one is a button
                    </ListGroup.Item>
                </ListGroup>
                <AlgInfo />
            </div>
        )
    }
}
