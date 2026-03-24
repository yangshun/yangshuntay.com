import { BsYoutube } from 'react-icons/bs';
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
  <LunchboxIcon className="bg-[#ff0000] text-white" icon={BsYoutube} />
);

export function LunchboxItemLinkYouTube({
  title = 'YouTube',
  username,
  subtitle: subtitleProp,
  ...props
}: Props) {
  const subtitle = subtitleProp ?? username;
  const action = (
    <a
      href={`https://youtube.com/@${username}`}
      target="_blank"
      rel="noreferrer"
      className={[
        'inline-flex px-4 py-2 rounded-full',
        'transition',
        'text-xs text-center font-medium tracking-tight',
        'text-white',
        'bg-[#0f0f0f] hover:bg-[#272727]',
      ]}
    >
      Subscribe
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
