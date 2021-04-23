import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Form, Input, Button, Typography, Card, Row, Col, Layout } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useUserLogin } from "../../hooks";
import { userToken, userProfileData } from "../../recoils/profile";

import "./style.css";

const validationRules = {
  username: [{ required: true, message: "Please input your Username!" }],
  password: [{ required: true, message: "Please input your Password!" }],
};

export default function Login() {
  const history = useHistory();
  const [loginParams, setLoginParams] = React.useState({});
  const [, setUserToken] = useRecoilState(userToken);
  const [, setUserProfileData] = useRecoilState(userProfileData);
  const { data, isSuccess } = useUserLogin(loginParams);

  React.useEffect(() => {
    if (isSuccess && data?.token && data?.user) {
      setUserToken(data?.token);
      setUserProfileData(data?.user);
      history.push("/dashboard");
    }
  }, [isSuccess, data]);

  const onFinish = (values) => {
    const query = {
      Email: values.username,
      Password: values.password,
    };
    setLoginParams(query);
  };

  return (
    <Layout className="login-layout">
      <Row justify="center">
        <Card className="login-card">
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
          <Typography.Title
            className="login-typography-title"
            level={3}
            align="center"
          >
            Login in NSE
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
                <Button htmlType="submit" className="login-form-button">
                  Login
                </Button>
                <div className="login-bottom-section">
                  Don't have an account?{" "}
                  <Link to="/account/sign-up" className="signup-link">
                    SignUp now!
                  </Link>
                </div>
              </Form.Item>
            </Form>
          </Row>
        </Card>
      </Row>
    </Layout>
  );
}
