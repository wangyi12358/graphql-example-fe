import { Button } from '@/components/antd'
import sdk from '@/graphql/sdk'
import { pickPagination } from '@/utils/pagination'
import { PageContainer, ProTable } from '@ant-design/pro-components'
import NiceModal from '@ebay/nice-modal-react'
import { Popconfirm, message } from 'antd'
import { pick } from 'lodash'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CreateModal } from './components/create-modal'

const Lov: React.FC = () => {
  const nav = useNavigate()
  return (
    <PageContainer
      title="值集列表"
    >
      <ProTable
        request={
          (params) => sdk
            .lovPage({
              pagination: pickPagination(params),
              input: pick(params, [ 'code', 'name' ]),
            })
            .then(res => res.lovPage)
        }
        toolBarRender={(actions) => [
          <Button
            onClick={() => {
              NiceModal.show(CreateModal, {
                reload: actions?.reload
              })
            }}
            type="primary"
          >
            新建值集
          </Button>
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
            render: (_, values, __, actions) => {
              return (
                <div className='space-x-3'>
                  <a
                    onClick={() => {
                      nav(`/lov/${values.id}`)
                    }}
                  >配置值集</a>
                  <Popconfirm
                    title="确定要删除此值集吗？"
                    onConfirm={async () => {
                      await sdk.deleteLov({
                        id: values.id
                      })
                      message.success('删除成功')
                      actions?.reload?.()
                    }}
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