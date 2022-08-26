import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Button } from "antd";


function MenuComponent() {
  const navigate = useNavigate();
  const items = [
    { label: "Home", key: "/" },
    { label: "Products", key: "/products" },
  ];

  const handleMenuClick = (item) => {
    console.log("click", item);
    navigate(item.key);
  };

  return (
    <Menu
      defaultSelectedKeys={["/"]}
      // defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      // inlineCollapsed={collapsed}
      items={items}
      onClick={handleMenuClick}
    />
  );
}

export default MenuComponent;
