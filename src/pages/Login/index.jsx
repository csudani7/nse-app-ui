import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Form, Input, Button, Typography, Card, Row, Col, Layout } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const validationRules = {
  username: [{ required: true, message: "Please input your Username!" }],
  password: [{ required: true, message: "Please input your Password!" }],
};

function Login(props) {
  const onFinish = (values) => {
    const query = {
      body: { username: values.username, password: values.password },
    };
    console.log(query, "onFinish");
  };

  return (
    <Layout className="login-layout">
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
            Login to NSE
          </Typography.Title>

          <Row justify="center">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item name="username" rules={validationRules.username}>
                <Input prefix={<UserOutlined />} placeholder="Username" />
              </Form.Item>
              <Form.Item name="password" rules={validationRules.password}>
                <Input
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder={"Password"}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
                Don't have an account?{" "}
                <Link to="/account/sign-up">SignUp now!</Link>
              </Form.Item>
            </Form>
          </Row>
        </Card>
      </Row>
    </Layout>
  );
}

export default Login;
