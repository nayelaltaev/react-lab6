import React from "react";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import Home from "./containers/Home/Home";
import MenuComponent from "./components/MenuComponent";

import { Layout } from "antd";
import { useState } from "react";
import  {Products}  from "./containers/Products/Products";
import { Button } from "antd";

const { Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <MenuComponent />
      </Sider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Layout>
  );
}

export default App;
