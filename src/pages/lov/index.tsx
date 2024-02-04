import { Button } from '@/components/antd'
import { PageContainer, ProTable } from '@ant-design/pro-components'
import { Popconfirm } from 'antd'
import React from 'react'

const Lov: React.FC = () => {
  return (
    <PageContainer
      title="值集列表"
    >
      <ProTable
        toolBarRender={() => [
          <Button type="primary">新建值集</Button>
        ]}
        columns={[
          {
            title: '值集名称',
            dataIndex: 'name',
          },
          {
            title: '值集编码',
            dataIndex: 'code',
          },
          {
            title: '值集描述',
            dataIndex: 'desc',
            hideInSearch: true,
          },
          {
            title: '操作',
            hideInSearch: true,
            render: () => {
              return (
                <div className='space-x-3'>
                  <a>修改值集</a>
                  <Popconfirm
                    title="确定要删除此值集吗？"
                  >
                    <a>删除</a>
                  </Popconfirm>
                </div>
              )
            }
          }
        ]}
      />
    </PageContainer>
  )
}

export default Lov