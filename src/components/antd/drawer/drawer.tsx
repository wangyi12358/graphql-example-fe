import type { DrawerProps as AntDrawerProps } from 'antd'
import { Drawer as AntDrawer } from 'antd'
import React from 'react'

export type DrawerProps = AntDrawerProps

export const Drawer: React.FC<DrawerProps> = (props) => {
  return (
    <AntDrawer
      width={800}
      {...props}
    />
  )
}
