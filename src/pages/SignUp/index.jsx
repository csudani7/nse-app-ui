import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Form, Input, Button, Typography, Card, Row, Layout, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const validationRules = {
  username: [{ required: true, message: "Please input your username!" }],
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
        name: values.username,
        username: values.username,
        password: values.password,
        roles: [values.roles],
      },
    };
    console.log(query, "onFinish");
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
              <Form.Item name="username" rules={validationRules.username}>
                <Input prefix={<UserOutlined />} placeholder="Username" />
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
                Already user? <Link to="/account">Login here!</Link>
              </Form.Item>
            </Form>
          </Row>
        </Card>
      </Row>
    </Layout>
  );
}

export default SignUp;
