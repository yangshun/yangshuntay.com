import { BsFacebook } from 'react-icons/bs';
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
  <LunchboxIcon className="bg-[#1877F2] text-white" icon={BsFacebook} />
);

export function LunchboxItemLinkFacebook({
  title = 'Facebook',
  username,
  subtitle: subtitleProp,
  ...props
}: Props) {
  const subtitle = subtitleProp ?? username;
  const action = (
    <a
      href={`https://facebook.com/${username}`}
      target="_blank"
      rel="noreferrer"
      className={[
        'inline-flex px-3 py-2 rounded-lg',
        'transition',
        'text-xs text-center font-semibold',
        'text-gray-900',
        'bg-[#e4e6eb] hover:bg-gray-300',
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
