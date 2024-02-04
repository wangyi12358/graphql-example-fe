import { DashboardOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons'
import { ProLayoutProps } from '@ant-design/pro-components'

export const route: ProLayoutProps['route'] = {
  children: [
    {
      path: '/',
      name: '首页',
      icon: <HomeOutlined />
    },
    {
      path: '/lov',
      name: '值集',
      icon: <DashboardOutlined />
    },
    {
      path: '/user',
      name: '用户列表',
      icon: <UserOutlined />,
    }
  ]
}
