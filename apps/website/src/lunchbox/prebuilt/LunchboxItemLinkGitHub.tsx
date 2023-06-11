import {BsGithub} from 'react-icons/bs';
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

const icon = <LunchboxIcon className="bg-black text-white" icon={BsGithub} />;

export default function LunchboxItemLinkGitHub({
  title = 'GitHub',
  username,
  subtitle: subtitleProp,
  ...props
}: Props) {
  const subtitle = subtitleProp ?? username;
  const action = (
    <a
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noreferrer"
      className={clsx(
        'inline-flex px-3 py-1.5 rounded-lg',
        'text-xs text-center font-semibold',
        'transition',
        'text-[#24292f]',
        'border border-[#1f2328]/15',
        'shadow-sm',
        'bg-[#f6f8fa] hover:bg-[#f3f4f6]',
      )}>
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
