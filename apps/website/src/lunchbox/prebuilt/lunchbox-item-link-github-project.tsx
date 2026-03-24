import { BsGithub } from 'react-icons/bs';
import { Props as SelfProps } from '../layouts/lunchbox-item-link';
import { Props as CellProps } from '../core/lunchbox-item';

import { LunchboxIcon } from '../core/lunchbox-icon';
import { LunchboxItemLink } from '../layouts/lunchbox-item-link';

type Props = Pick<SelfProps, 'className' | 'image'> &
  CellProps &
  Readonly<{
    title?: string;
    username: string;
    repoName: string;
    description?: string;
  }>;

const icon = <LunchboxIcon className="bg-black text-white" icon={BsGithub} />;

export function LunchboxItemLinkGitHubProject({
  title: titleProp,
  description,
  username,
  repoName,
  ...props
}: Props) {
  const title = titleProp ?? repoName;
  const subtitle = description;
  const action = (
    <a
      href={`https://github.com/${username}/${repoName}`}
      target="_blank"
      rel="noreferrer"
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
      Star
    </a>
  );

  return (
    <LunchboxItemLink
      icon={icon}
      title={title}
      subtitle={subtitle ?? description}
      action={action}
      {...props}
    />
  );
}
