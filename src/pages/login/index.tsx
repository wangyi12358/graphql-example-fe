import sdk from '@/graphql/sdk'
import { setCookie } from '@/utils/cookie'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { LoginForm, ProFormText } from '@ant-design/pro-components'
import { FC } from 'react'

const Login: FC = () => {
  return (
    <div className='h-screen overflow-hidden relative'>
      <div className='mt-[30vh] ml-[20vh]'>
        <LoginForm<API.LoginParams>
          initialValues={{
            username: 'wangyi12358',
            password: '123456'
          }}
          onFinish={async values => {
            const res = await sdk.login({
              input: values
            })
            if (res?.login?.token) {
              setCookie(import.meta.env.VITE_TOKEN_KEY, res.login.token, 2)
              // location.href = import.meta.env.BASE_URL
            }
          }}
          title={<div className='mb-16 text-lg'>Base Admin</div>}
        >
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            placeholder="请输入用户名"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            placeholder="请输入密码"
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
        </LoginForm>
      </div>
    </div>
  )
}
export default Login