import { BsGithub } from 'react-icons/bs';
import { Props as SelfProps } from '../layouts/lunchbox-item-link';
import { Props as CellProps } from '../core/lunchbox-item';
import { Anchor } from '~/components/anchor';

import { LunchboxIcon } from '../core/lunchbox-icon';
import { LunchboxItemLink } from '../layouts/lunchbox-item-link';

type Props = Pick<SelfProps, 'className' | 'image'> &
  CellProps &
  Readonly<{
    title?: string;
    subtitle?: string;
    username: string;
  }>;

const icon = <LunchboxIcon className="bg-black text-white" icon={BsGithub} />;

export function LunchboxItemLinkGitHub({
  title = 'GitHub',
  username,
  subtitle: subtitleProp,
  ...props
}: Props) {
  const subtitle = subtitleProp ?? username;
  const action = (
    <Anchor
      href={`https://github.com/${username}`}
      className={[
        'inline-flex px-3 py-1.5 rounded-lg',
        'text-xs text-center font-semibold',
        'transition',
        'text-[#24292f]',
        'border border-[#1f2328]/15',
        'shadow-xs',
        'bg-[#f6f8fa] hover:bg-[#f3f4f6]',
      ]}
    >
      Follow
    </Anchor>
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
