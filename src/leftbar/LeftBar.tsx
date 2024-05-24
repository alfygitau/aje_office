import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { NavLink } from "react-router-dom";

const LeftBar = () => {
  const items: MenuProps["items"] = [
    {
      label: <NavLink to="/1">Dashboard</NavLink>,
      key: "0",
    },
    {
      label: <NavLink to="/2">Reports</NavLink>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: <NavLink to="/3">BCLB report</NavLink>,
      key: "3",
    },
  ];
  return (
    <div className="bg-[#2a3163] w-[180px] h-[610px] gap-[20px] text-white">
      <p>DashBoard</p>
      <p>
        {" "}
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Finance panel
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </p>
      <p>
        {" "}
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Gaming Panel
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </p>
      <p>Promotions</p>
      <p>Send SMS</p>
      <p>Reports</p>
      <p>System Security</p>
      <p>Settings</p>
    </div>
  );
};

export default LeftBar;
