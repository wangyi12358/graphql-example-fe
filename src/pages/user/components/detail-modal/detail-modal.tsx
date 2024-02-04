import { Modal } from '@/components/antd'
import { SchemaForm } from '@/components/pro-components'
import { User } from '@/graphql/generated/getSdk'
import NiceModal, { antdModalV5, useModal } from '@ebay/nice-modal-react'

export interface DetailModalProps {
  record?: User
  reload?: () => void
}

export const DetailModal = NiceModal.create<DetailModalProps>(({ record }) => {
  const modal = useModal()
  const antdV5Modal = antdModalV5(modal)

  return (
    <Modal
      {...antdV5Modal}
      title={`${record ? '编辑' : '新增'}用户`}
    >
      <SchemaForm
        initialValues={record}
        colProps={{
          span: 12
        }}
        columns={[
          {
            title: '用户名',
            dataIndex: 'username',
            formItemProps: {
              rules: [ { required: true } ]
            }
          },
          {
            title: '密码',
            dataIndex: 'password',
            formItemProps: {
              rules: [ { required: true } ]
            }
          },
          {
            title: '昵称',
            dataIndex: 'email',
            formItemProps: {
              rules: [ { required: true, type: 'email' } ]
            }
          },
          {
            title: '性别',
            dataIndex: 'gender',
            valueType: 'radio',
          }
        ]}
      />
    </Modal>
  )
})