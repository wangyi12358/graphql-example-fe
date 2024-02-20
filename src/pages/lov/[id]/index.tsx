import { Button } from '@/components/antd'
import sdk from '@/graphql/sdk'
import { PageContainer, ProDescriptions, ProTable } from '@ant-design/pro-components'
import { useRequest } from 'ahooks'
import { Card } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'

const Id: React.FC = () => {
  const { id } = useParams<'id'>()
  const { data, loading } = useRequest(sdk.lovDetail, {
    defaultParams: [ { id: Number(id) } ]
  })

  return (
    <PageContainer loading={loading} title="配置值集">
      <div className='space-y-3'>
        <Card title="基本信息">
          <ProDescriptions
            dataSource={data?.findLov}
            columns={[
              {
                title: 'ID',
                dataIndex: 'id',
              },
              {
                title: '代码',
                dataIndex: 'code',
              },
              {
                title: '名称',
                dataIndex: 'name',
              },
              {
                title: '描述',
                dataIndex: 'desc',
              }
            ]}
          />
        </Card>
        <Card
          extra={
            <Button type="primary">新建</Button>
          }
          title="值集数据"
        >
          <ProTable

            toolBarRender={false}
            search={false}
            dataSource={data?.lovFields}
            columns={[
              {
                title: '名称',
                dataIndex: 'label',
              },
              {
                title: '值',
                dataIndex: 'value',
              },
              {
                title: '描述',
                dataIndex: 'desc',
              },
              {
                title: '状态',
                dataIndex: 'status',
              }
            ]}
          />
        </Card>
      </div>
    </PageContainer>
  )
}

export default Id