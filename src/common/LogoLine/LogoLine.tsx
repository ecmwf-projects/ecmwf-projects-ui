import React, { cloneElement } from 'react'
import { Group } from '@mantine/core';
import { LogoLineProps } from './LogoLine.types';

const LogoLine: React.FC<LogoLineProps> = ({children, ...props}) => {

  props["style"] = props["style"] || {width: 150, height: 'auto'};

  const logos = children.map((item: React.ReactNode) => (
    cloneElement(item, props)
  ));

  return (
    <Group>
      {logos}
    </Group>
  );
};



export default LogoLine;