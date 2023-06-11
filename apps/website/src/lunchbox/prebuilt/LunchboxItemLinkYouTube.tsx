import {BsYoutube} from 'react-icons/bs';
import {Props as SelfProps} from '../layouts/LunchboxItemLink';
import {Props as CellProps} from '../core/LunchboxItem';

import LunchboxIcon from '../core/LunchboxIcon';
import LunchboxItemLink from '../layouts/LunchboxItemLink';
import clsx from 'clsx';

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

export default function LunchboxItemLinkYouTube({
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
      className={clsx(
        'inline-flex px-4 py-2 rounded-full',
        'transition',
        'text-xs text-center font-bold tracking-tight',
        'text-white',
        'bg-[#0f0f0f] hover:bg-[#272727]',
      )}>
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
