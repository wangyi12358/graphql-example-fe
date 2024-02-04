import { BetaSchemaForm } from '@ant-design/pro-form'
import type { FormSchema } from '@ant-design/pro-form/es/components/SchemaForm/typing'

export interface SchemaFormProps {

}

export function SchemaForm<T = Record<string, any>, ValueType = 'text'>(props: SchemaFormProps & FormSchema<T, ValueType>) {

  return (
    <BetaSchemaForm
      grid
      rowProps={{
        gutter: [ 32, 16 ],
      }}
      colProps={{
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 8,
        xxl: 6,
      }}
      submitter={false}
      validateMessages={{
        required: '${label}是必填项',
      }}
      {...props}
    />
  )
}
