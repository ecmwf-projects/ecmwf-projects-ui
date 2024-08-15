import { ReactNode } from 'react';
import { Group, Tooltip, Collapse, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconShare,
  IconBrandX,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconX,
} from '@tabler/icons-react';
import { ShareActionIconProps, ShareButtonProps, ShareProps } from './Share.types';


type Platforms = {
  [platform: string]: {
    sharer: string;
    tooltip: string;
    icon: ReactNode;
  };
};

const PlatformProps: Platforms = {
  facebook: {
    sharer: "https://www.facebook.com/sharer/sharer.php?u=",
    tooltip: "Share to Facebook",
    icon: <IconBrandFacebook />,
  },
  linkedin: {
    sharer: "https://www.linkedin.com/shareArticle/?url=",
    tooltip: "Share to LinkedIn",
    icon: <IconBrandLinkedin />,
  },
  x: {
    sharer: "https://x.com/share?url=",
    tooltip: "Share to X (Twitter)",
    icon: <IconBrandX />,
  },
}

const ShareActionIcon = ({icon, size, tooltip, ...props}: ShareActionIconProps) => {
  return (
    <Tooltip label={tooltip} >
      <ActionIcon  {...props} >
        {icon}
      </ActionIcon>
    </Tooltip>
  )
}

const ShareButton = ({
  sharer,
  link,
  icon,
  ...props
}: ShareButtonProps) => {
  return (
      <a href={[sharer, link].join("")} target="_blank" rel="noreferrer">
        <ShareActionIcon icon={icon} {...props} />
      </a>
  )
}

export const Share = ({link, facebook, linkedin, x, group=true, ...props}: ShareProps) => {
  const [shareOpened, { toggle }] = useDisclosure(false);

  const shareButtons = Object.entries({facebook, linkedin, x}).map(([key, value]) => (
    <>
      {value && 
        <ShareButton key={key} link={link} {...PlatformProps[key as keyof Platforms]} {...props} />
      }
    </>
  ));

  const shareGroup = (
    <Group justify='left'>{shareButtons}</Group>
  )

  if (group) {
    return (
      <Group justify='left'>
        <ShareActionIcon
          tooltip={shareOpened ? "Close" : "Share"}
          onClick={toggle}
          icon={shareOpened ? <IconX />: <IconShare />}
        />
        <Collapse in={shareOpened}>
          {shareGroup}
        </Collapse>
      </Group>
    )
  }

  return shareGroup;
}