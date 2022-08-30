import React, { Component } from 'react'
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

import './index.css'
import { useNavigate } from 'react-router-dom';

 const Login = () => {
    const navigate = useNavigate()
  
    const onFinish = (values) => {
        const userName = values.username;
        const password = values.password;
        console.log(userName,password);
      };

    const onClickNav = () =>{
        navigate('/home');
    }
    return (
      <div className="login">
        <header className="login-header">
            <h1>Please Login</h1>
        </header>
        <section className="login-content">
            <h2>LOGIN</h2>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                    ]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button 
                        type="primary" 
                        htmlType="submit" 
                        className="login-form-button"
                        onClick={onClickNav}
                    >
                    Log in
                    </Button>
                </Form.Item>
            </Form>
        </section>
      </div>
    )
  }



export default Login;