import { useState } from "react";

import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { StyledContainer, StyledInnerLayout, StyledLayout } from "./styles"
import { Layout, Menu, MenuProps } from "antd";
import { CalendarOutlined, CreditCardOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";

const { Sider } = Layout;

export const DashboardLayout = () => {

    const location = useLocation();
    const pathSplit = location.pathname.split("/");
    const [collapsed, setCollapsed] = useState(true);
    const [current, setCurrent] = useState(pathSplit[pathSplit.length - 1] ?? "");

    const onClick: MenuProps["onClick"] = (e) => {
		setCurrent(e.key);
	};

    const navigate = useNavigate();

    const items: MenuProps["items"] = [
        { label: "Início", key: "dashboard", icon: <HomeOutlined /> ,onClick: () => navigate("/dashboard") },
        { label: "Agenda", key: "agenda", icon: <CalendarOutlined />, onClick: () => navigate("agenda") },
        { label: "Pacientes", key: "patients", icon: <UserOutlined /> ,onClick: () => navigate("patients") },
        { label: "Planos de saúde", key: "health-ensurance", icon: <CreditCardOutlined /> ,onClick: () => navigate("health-ensurance") },
    ];

    return (
        <>
            <StyledLayout>
                <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed((isCollapsed) => !isCollapsed)} width={300}>
                    <Menu onClick={onClick} theme="dark" selectedKeys={[current]} mode="inline" items={items} />;
                </Sider>

                
                <StyledInnerLayout>
                    <StyledContainer>
                        <Outlet></Outlet>
                    </StyledContainer>
                </StyledInnerLayout>
                
            </StyledLayout>
        </>
    )
}