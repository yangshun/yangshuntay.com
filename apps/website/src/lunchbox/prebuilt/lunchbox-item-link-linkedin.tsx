import { BsLinkedin, BsPlus } from 'react-icons/bs';
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
  <LunchboxIcon className="bg-[#0A66C2] text-white" icon={BsLinkedin} />
);

export function LunchboxItemLinkLinkedIn({
  title = 'LinkedIn',
  username,
  subtitle: subtitleProp,
  ...props
}: Props) {
  const subtitle = subtitleProp ?? username;
  const action = (
    <a
      href={`https://www.linkedin.com/in/${username}`}
      target="_blank"
      rel="noreferrer"
      className={[
        'inline-flex items-center',
        'pr-1.5 rounded-sm',
        'text-xs text-center font-semibold',
        'transition',
        'text-[#0A66C2] hover:bg-[#378FE9]/10',
      ]}
    >
      <BsPlus className="size-6" /> Follow
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
