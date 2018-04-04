import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Form,
    Icon,
    Input,
    Button,
    Row,
    Col
} from 'antd';

import { login, cleanError }from "../actions/login";

const FormItem = Form.Item;
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

class NormalLoginForm extends Component {
    cleanError() {
        this.props.cleanError();
    }

    renderError(error){
       if (error) {
           return 'error';
       }
    }

    renderMessage(error) {
        if (error && error.status === 401) {
            return 'User or password is invalid';
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            this.props.login(values);
        });
    };
    render() {
        const { form: { getFieldDecorator }, isLoading, error } = this.props;
        return (
            <Row style={{marginTop: 40}} type='flex' justify='center'>
                <Col>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem
                            validateStatus={this.renderError(error)}
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    required: true, message: 'Please input your email!',
                                    pattern: emailRegExp, message: 'Email invalid!'
                                }],
                            })(
                                <Input onFocus={() => this.cleanError()} prefix={<Icon type="user" style={{ color: '#033F38' }} />} placeholder="Email" />
                            )}
                        </FormItem>
                        <FormItem
                            validateStatus={this.renderError(error)}
                            help={this.renderMessage(error)}
                        >
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true, message: 'Please input your Password!',
                                    min: 4, message: 'Password should contain at least 4 charts'
                                }],
                            })(
                                <Input onFocus={() => this.cleanError()} prefix={<Icon type="lock" style={{ color: '#033F38' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem style={{textAlign: 'right'}}>
                            <Button
                                type="primary"
                                loading={isLoading}
                                htmlType="submit"
                                className="login-form-button">
                                Log in
                            </Button>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        );
    }
}

const LoginComponentWrapper = Form.create()(NormalLoginForm);

const mapDispatchToProps = (dispatch) => {
    return {
        login: (model) => dispatch(login(model)),
        cleanError: () => dispatch(cleanError())
    };
};

const LoginComponent = connect(null, mapDispatchToProps)(LoginComponentWrapper);

export default LoginComponent;
