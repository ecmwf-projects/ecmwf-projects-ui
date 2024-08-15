import { ReactNode } from 'react';
import { ActionIconProps } from '@mantine/core';

export interface ShareActionIconProps extends ActionIconProps {
  icon?: ReactNode;
  size?: number;
  onClick?: () => void;
  tooltip?: string;
}

export interface ShareButtonProps extends ShareActionIconProps{
  sharer?: string;
  link: string;
}

export interface ShareProps extends ShareActionIconProps{
  link: string;
  facebook?: boolean;
  linkedin?: boolean;
  x?: boolean;
  group?: boolean;
}