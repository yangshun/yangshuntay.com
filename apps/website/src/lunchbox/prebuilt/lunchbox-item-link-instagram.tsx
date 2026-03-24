import { BsInstagram } from 'react-icons/bs';
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
  <LunchboxIcon className="bg-[#e1306c] text-white" icon={BsInstagram} />
);

export function LunchboxItemLinkInstagram({
  title = 'Instagram',
  username,
  subtitle: subtitleProp,
  ...props
}: Props) {
  const subtitle = subtitleProp ?? `@${username}`;
  const action = (
    <a
      href={`https://instagram.com/${username}`}
      target="_blank"
      rel="noreferrer"
      className={[
        'inline-flex px-3 py-1.5 rounded-lg',
        'transition',
        'text-xs text-center font-medium text-white active:text-white/80',
        'bg-[#4093EF] hover:bg-[#2875CA] active:bg-[#3383DC]',
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
