import { Outlet } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import {MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, HomeOutlined, ProductOutlined} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Dropdown, Flex  } from "antd";
import { useTranslation } from 'react-i18next'
import { Eng, Uz, Ru} from '../../components/icons/flags/index'
import {changeLanguage, getLanguage, getChangedLanguage} from '../../utils/lang.js'


export const Dashboard = () => {
  const { Header, Sider, Content } = Layout;
  const currentYear = new Date().getFullYear();
  const [collapsed, setCollapsed] = useState(false);
  const [language, setLanguage] = useState(getLanguage()); 
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
  const { t, i18n } = useTranslation();
  console.log(language);
  
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    changeLanguage(lang);
    setLanguage(lang);  
  };

  useEffect(() => {
    const lang = getLanguage();
    i18n.changeLanguage(lang);
    setLanguage(lang);  
  }, []);

  const items = [
    { key: '1', label: <Button type="link" onClick={() => changeLang('uz')}>UZ</Button>, icon: <Uz /> },
    { key: '2', label: <Button type="link" onClick={() => changeLang('ru')}>RU</Button>, icon: <Ru /> },
    { key: '3', label: <Button type="link" onClick={() => changeLang('en')}>ENG</Button>, icon: <Eng /> },
  ];

  return (
    <>
    <Layout className="h-[100vh]">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical cursor-pointer">
          <div className="p-4 text-white text-xl w-full grid place-content-center">
            <MdDashboard />
          </div>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} items={[
          { key: "1", icon: <HomeOutlined />, label: <NavLink to="/">{t('home')}</NavLink> },
          { key: "2", icon: <UserOutlined />, label: <NavLink to="/users">{t('users')}</NavLink> },
          { key: "3", icon: <ProductOutlined />, label: <NavLink to="/products">{t('products')}</NavLink> },
        ]} />
      </Sider>
      <Layout>
        <Header style={{ padding: 1, background: colorBgContainer }}>
          <Flex justify="space-between" align="center">
            <Button type="text" icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)} style={{ fontSize: "16px", width: 64, height: 64 }} />
            <Dropdown menu={{ items }} trigger={["click"]}>
              <Button onClick={(e) => e.preventDefault()} style={{ marginRight: '15px' }}>
                {getChangedLanguage()}  
              </Button>
            </Dropdown>
          </Flex>
        </Header>
        <Content style={{ margin: "24px 16px", padding: 24, minHeight: 280, background: colorBgContainer, borderRadius: borderRadiusLG }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
    <footer style={{ textAlign: 'center', padding: '5px'}} className="bg-slate-300 h-full">
      <p>&copy; {currentYear} <span className="font-bold text-indigo-900">Ant Design</span>.</p>
    </footer>
    </>
  );
};
