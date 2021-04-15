import React from "react";
import axios from 'axios';
import "./style.css";
import { Link } from "react-router-dom";
import { Form, Input, Button, Typography, Card, Row, Layout, Col } from "antd";
import { UserOutlined, LockOutlined, MailOutlined} from "@ant-design/icons";

const validationRules = {
  fullName: [{ required: true, message: "Please input your full name!" }],
  email: [{ required: true, type: "email", message: "The input is not valid email!" }],
  password: [
    { required: true, message: "Please input your password!" },
    { min: 8, messages: "password must be at least 8 characters " },
  ],
  confirm: [
    {
      required: true,
      message: "Please confirm your password!",
    },
    ({ getFieldValue }) => ({
      validator(_rule, value) {
        if (!value || getFieldValue("password") === value) {
          return Promise.resolve();
        }
        return Promise.reject(
          "The two passwords that you entered do not match!"
        );
      },
    }),
  ],
  acceptTerms: [
    {
      validator: (_, value) =>
        value ? Promise.resolve() : Promise.reject("Should accept agreement"),
    },
  ],
};

function SignUp(props) {
  const onFinish = (values) => {
    const query = {
      body: {
        FullName: values.fullName,
        Email: values.email,
        Password: values.password,
        Role: 'user'
      },
    };

    axios.post('http://localhost:9000/api/v1/auth/register', query.body)
    .then(res=> {
      alert(res.data.message);
      if(res.data.token){
        localStorage.setItem('token', res.data.token);
        props.history.push('/');
      }
    })
    .catch(err => {
      console.log(err, 'err');
      alert("Signup failed! Please try again!");
    })

  };

  return (
    <Layout className="signUp-layout">
      <Row justify="center">
        <Card style={{ width: "360px" }}>
          <Row justify="center">
            <Col xs={4} md={4}>
              <Link to="/">
                <img
                  src="https://kite.zerodha.com/static/images/kite-logo.svg"
                  alt="Kite logo"
                />
              </Link>
            </Col>
          </Row>

          <Typography.Title level={3} align="center">
            Register in NSE
          </Typography.Title>

          <Row justify="center">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                acceptTerms: true,
                advertisesEnable: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item name="fullName" rules={validationRules.fullName}>
                <Input prefix={<UserOutlined />} placeholder="Full Name" />
              </Form.Item>

              <Form.Item name="email" rules={validationRules.email}>
                <Input prefix={<MailOutlined />} placeholder="Email" />
              </Form.Item>

              <Form.Item name="password" rules={validationRules.password}>
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item
                name="confirm"
                dependencies={["password"]}
                rules={validationRules.confirm}
              >
                <Input
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="re-enter"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Sign up
                </Button>
                <div style={{marginTop: '10px'}}>
                Already user? <Link to="/account" className='loginLink'>Login here!</Link>
                </div>
              </Form.Item>
            </Form>
          </Row>
        </Card>
      </Row>
    </Layout>
  );
}

export default SignUp;
