import { Modal } from '@/components/antd'
import { SchemaForm } from '@/components/pro-components'
import { CreateLov } from '@/graphql/generated/getSdk'
import sdk from '@/graphql/sdk'
import { ProFormInstance } from '@ant-design/pro-components'
import NiceModal, { antdModalV5, useModal } from '@ebay/nice-modal-react'
import { useRef } from 'react'

export interface CreateModalProps {
  reload?: () => void
}

export const CreateModal = NiceModal.create<CreateModalProps>(({ reload }) => {
  const modal = useModal()
  const antdV5Modal = antdModalV5(modal)
  const formRef = useRef<ProFormInstance<CreateLov>>()

  return (
    <Modal
      {...antdV5Modal}
      title="新建值集"
      onOk={async () => {
        const values = await formRef.current?.validateFields()
        if (!values) return
        await sdk.createLov({ input: values })
        antdV5Modal.onOk()
        reload?.()
      }}
    >
      <SchemaForm<CreateLov>
        formRef={formRef}
        colProps={{
          span: 12
        }}
        columns={[
          {
            title: '值集名称',
            dataIndex: 'name',
            formItemProps: {
              rules: [ { required: true } ]
            }
          },
          {
            title: '值集编码',
            dataIndex: 'code',
            formItemProps: {
              rules: [ { required: true } ]
            }
          },
          {
            title: '描述',
            dataIndex: 'desc',
            valueType: 'textarea',
            colProps: {
              span: 24
            }
          }
        ]}
      />
    </Modal>
  )
})