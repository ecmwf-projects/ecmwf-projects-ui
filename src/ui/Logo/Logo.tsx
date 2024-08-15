import React from 'react'
import { Image } from '@mantine/core';
import { LogoProps } from './Logo.types';
import { organisationURL } from '@/URLs';

export const Logo: React.FC<LogoProps> = ({
  organisation,
  negative=false,
  href,
  ...props
}) => (
  <a href={(href == null) ? organisationURL(organisation) : href} target='_blank'>
    <Image
      src={`logos/${organisation}-${(negative ? 'negative' : 'positive')}.webp`}
      alt={`${organisation} logo`}
      {...props}
    />
  </a>
);


export const C3SLogo = ({...props}) => (
  <Logo organisation="c3s" {...props} />
);


export const ECMWFLogo = ({...props}) => (
  <Logo organisation="ecmwf" {...props}/>
);


export const CopernicusLogo = ({...props}) => (
  <Logo organisation="copernicus" {...props}/>
);


export const EULogo = ({...props}) => (
  <Logo organisation="eu" {...props}/>
);