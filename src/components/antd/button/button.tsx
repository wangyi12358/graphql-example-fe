import { useUpdateEffect } from 'ahooks'
import type { ButtonProps as AntButtonProps } from 'antd'
import { Button as AntButton } from 'antd'
import React, { useState } from 'react'

export type ButtonProps = AntButtonProps

/**
 * feature:传入的如果是一个异步事件，则在事件返回的promise状态确认之前，按钮处于loading状态，如果传入了有效的loading状态，则忽略此特性
 * @param props
 * @returns
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const [ loading, setLoading ] = useState(props.loading)

  useUpdateEffect(() => {
    setLoading(props.loading)
  }, [ props.loading ])

  return (
    <AntButton
      {...props}
      loading={loading}
      onClick={async (e) => {
        const res = props.onClick?.(e as React.MouseEvent<HTMLButtonElement>) as undefined | Promise<void>
        if (res instanceof Promise) {
          setLoading(true)
          res.finally(() => {
            setLoading(false)
          })
        }
      }}
    />
  )
}
