import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
import {
    HomeTwoTone,
    DesktopOutlined,
    PieChartOutlined,
    PlusCircleTwoTone,
    UserOutlined,
  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import '../../App.css'
  
type Props = {}

const AdminLayout = (props: Props) => {
  const { Header, Content, Footer, Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  type MenuItem = Required<MenuProps>['items'][number];
  
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    to?: string,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      to: to || '/',
      children,
      label: <Link to={to || '/'}>{label}</Link>,
    } as MenuItem;
  }
  
  const items: MenuItem[] = [
    getItem('Home Page', '4', <HomeTwoTone />),
    getItem('User', '4', <UserOutlined />,"/admin/user"),
    getItem('Feedback', '4', <UserOutlined />,"/admin/feedback"),
    getItem('Projects', 'sub1', <PieChartOutlined />, "/admin/projects",[
      getItem('Add New', '3',<PlusCircleTwoTone />,"/admin/projects/add"),
    ]),
    getItem('Categories', 'sub2', <DesktopOutlined />,"/admin/categories" ,[
      getItem('Add New', '6',<PlusCircleTwoTone />,"/admin/categories/add"),
    ])
  ];
  
  return (
    <div>
         <Layout style={{ minHeight: '100vh'}}>
          <Sider className="Slide-admin" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div style={{ height: 32, margin: 16, background: '#002140' }}></div>
            <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
          </Sider>
          <Layout className="site-layout">
            <Header style={{ padding: 0, background: colorBgContainer }} />
            <Content style={{ margin: '0 16px' }}>
              <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                <main>
                  <Outlet></Outlet>
                </main>
              </div>
            
            </Content>
            <Footer style={{ textAlign: 'center' }}>Portfolio design ©2022 by Phuong Tran</Footer>
          </Layout>
      </Layout>
        
    </div>
  )
}

export default AdminLayout