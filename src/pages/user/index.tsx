import sdk from '@/graphql/sdk'
import { pickPagination } from '@/utils/pagination'
import { PageContainer, ProTable } from '@ant-design/pro-components'
import NiceModal from '@ebay/nice-modal-react'
import { Button } from 'antd'
import { pick } from 'lodash'
import React from 'react'
import { DetailModal } from './components/detail-modal'

const User: React.FC = () => {
  return (
    <PageContainer title="用户列表">
      <ProTable
        toolBarRender={(actions) => [
          <Button
            onClick={() => {
              NiceModal.show(DetailModal, {
                reload: actions?.reload
              })
            }}
            type="primary"
          >
            新建用户
          </Button>
        ]}
        request={
          (params) => sdk
            .users({
              pagination: pickPagination(params),
              input: pick(params, [ 'nickname' ]),
            })
            .then(res => res.users)
        }
        columns={[
          {
            dataIndex: 'id',
            title: 'ID',
          },
          {
            dataIndex: 'nickname',
            title: '昵称'
          }
        ]}
      />
    </PageContainer>
  )
}

export default User