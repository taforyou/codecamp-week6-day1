import React, { Component } from 'react';
import logo from './logo.svg';
import { Form, Icon, Input, Button, Checkbox, Card } from 'antd';
import './App.css';

class App extends Component {
  render() {

    const FormItem = Form.Item;

    return (
        <div className="App">

            <h1>Welcome to my application</h1>
            <Card title="Sing In" style={{ width: 300, margin: 'auto' }}>
              <Form className="login-form">
                <FormItem>
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                </FormItem>
                <FormItem>
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      Sign in
                    </Button>
                    <a className="login-form-forgot" href="">Forgot password</a>
                </FormItem>
                <hr></hr>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                      Sign up
                    </Button>
                </FormItem>
              </Form>
            </Card>
        </div>
    );
  }
}

export default App;
