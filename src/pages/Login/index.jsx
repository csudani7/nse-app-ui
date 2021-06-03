import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { useSetRecoilState } from "recoil";
import { Form, Input, Button, Typography, Card, Row, Col, Layout } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { useGetUserProfile } from "../../hooks";
import { getUserLogin } from "../../services/auth";
import { userProfileData } from "../../recoils/profile";

import "./style.css";

const validationRules = {
  username: [{ required: true, message: "Please input your Username!" }],
  password: [{ required: true, message: "Please input your Password!" }],
};

export default function Login() {
  const history = useHistory();
  const { data, isSuccess: isFetchProfileData } = useGetUserProfile();
  const {
    mutate: login,
    isSuccess,
    isLoading,
  } = useMutation((data) => getUserLogin(data));
  const setProfileData = useSetRecoilState(userProfileData);

  const onFinish = async (values) => {
    const query = {
      Email: values.username,
      Password: values.password,
    };
    login(query);
  };

  React.useEffect(() => {
    if (isSuccess) {
      localStorage.setItem("isUserLogged", "true");
      history.push("/dashboard");
    }
  }, [isSuccess, history]);

  React.useEffect(() => {
    if (data && isFetchProfileData) {
      setProfileData(data?.user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, data]);

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
              // initialValues={{
              //   remember: true,
              // }}
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
                  {isLoading ? "Please wait" : "Login"}
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
