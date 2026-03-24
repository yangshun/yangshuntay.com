import { BsTwitterX } from 'react-icons/bs';
import { Props as SelfProps } from '../layouts/lunchbox-item-link';
import { Props as CellProps } from '../core/lunchbox-item';

import { LunchboxIcon } from '../core/lunchbox-icon';
import { LunchboxItemLink } from '../layouts/lunchbox-item-link';

type Props = Pick<SelfProps, 'className' | 'image'> &
  CellProps &
  Readonly<{
    title?: string;
    subtitle?: string;
    username: string;
  }>;

const icon = (
  <LunchboxIcon className="bg-[#1DA1F2] text-white" icon={BsTwitterX} />
);

export function LunchboxItemLinkTwitter({
  title = 'X',
  username,
  subtitle: subtitleProp,
  ...props
}: Props) {
  const subtitle = subtitleProp ?? `@${username}`;
  const action = (
    <a
      href={`https://x.com/${username}`}
      target="_blank"
      rel="noreferrer"
      className={[
        'inline-flex px-3 py-1.5 rounded-full',
        'transition',
        'text-xs text-center font-semibold',
        'text-white',
        'shadow-xs',
        'bg-[#0f1419] hover:bg-[#272c30]',
      ]}
    >
      Follow
    </a>
  );

  return (
    <LunchboxItemLink
      icon={icon}
      title={title}
      subtitle={subtitle}
      action={action}
      {...props}
    />
  );
}
