import React from "react";
import { renderRoutes } from "react-router-config";
import { Layout } from "antd";

const { Content } = Layout;

function AccountLayout(props) {
  const { route } = props;
  return (
    <>
      <div className="account-layout">
        <Layout>
          <Content className="site-layout">
            <div className="site-layout-background">
              {renderRoutes(route.routes)}
            </div>
          </Content>
        </Layout>
      </div>
    </>
  );
}

export default AccountLayout;
