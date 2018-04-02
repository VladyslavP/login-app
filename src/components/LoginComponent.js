import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
const FormItem = Form.Item;
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

class NormalLoginForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row style={{marginTop: 40}}>
                <Col span={5} offset={9}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('email', {
                                rules: [{
                                    required: true, message: 'Please input your email!',
                                    pattern: emailRegExp, message: 'Email invalid!'
                                }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: '#033F38' }} />} placeholder="Email" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true, message: 'Please input your Password!',
                                    min: 4, message: 'Password should contain at least 4 charts'
                                }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: '#033F38' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem style={{textAlign: 'right'}}>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        );
    }
}

const LoginComponent = Form.create()(NormalLoginForm);

export default LoginComponent;
