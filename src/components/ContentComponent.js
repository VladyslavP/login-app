import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';

import { removeAuthToken } from '../common/helpers';
import { reactimg } from "../common/images";

const btnStyle = {
    position: 'absolute',
    right: 5,
    top: 10
};

class ContentComponent extends Component {
    logOut() {
        removeAuthToken();
        this.props.userAuthenticated(false);
    }

    render() {
        return (
            <Row>
                <Col>
                    <h1>What’s new in React 16.3 JavaScript UI library</h1>
                </Col>
                <Col span={12} offset={6}>
                    <div>
                        <img src={reactimg} alt="react"/>
                        <p>
                            For the component life cycle, the upcoming async rendering mode stretches the class component API model, which is being used in ways that were not originally intended.
                            So, new life cycles are being added, including getDerivedStateFromProps, as a safer alternative to the legacy life cycle, componentWillReceiveProps.
                            Also added is getSnapshotBeforeUpdate, to support the safe reading of properties, such the DOM before updates are made.
                            React 16.3 also adds the “unsafe” prefix to some of these life cycles, such as to componentWillMount and componentWillReceiveUpdate.
                            In these instances, “unsafe” does not refer to security but to the fact that code using these life cycles is more likely to have bugs in future versions of React.
                        </p>
                    </div>
                </Col>
                <Button
                    onClick={()=> this.logOut()}
                    style={btnStyle}
                    type='primary'>
                    Log out
                </Button>
            </Row>
        );
    }
}

export default ContentComponent;
