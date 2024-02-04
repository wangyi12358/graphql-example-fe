import type { ModalProps as AntModalProps } from 'antd';
import { Modal as AntModal } from 'antd';
import React from 'react';

export interface ModalProps extends AntModalProps {

}

export const Modal: React.FC<ModalProps> = (props) => {
  return <AntModal width={800} {...props} />;
};
