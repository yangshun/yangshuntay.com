import {
  BsGithub,
  BsMedium,
  BsLinkedin,
  BsStackOverflow,
  BsTwitterX,
} from 'react-icons/bs';
import { Anchor } from '~/components/anchor';

const internetProfiles = {
  github: {
    label: 'GitHub',
    icon: BsGithub,
    href: 'https://github.com/yangshun',
  },
  linkedin: {
    label: 'LinkedIn',
    icon: BsLinkedin,
    href: 'https://linkedin.com/in/yangshun',
  },
  twitter: {
    label: 'X',
    icon: BsTwitterX,
    href: 'https://x.com/yangshun',
  },
  stackoverflow: {
    label: 'StackOverflow',
    icon: BsStackOverflow,
    href: 'https://stackoverflow.com/u/1751946',
  },
  medium: {
    label: 'Medium',
    icon: BsMedium,
    href: 'https://medium.com/@yangshun',
  },
} as const;

export function ProfileLinks() {
  return (
    <div className="text-sm flex flex-wrap gap-x-4">
      {Object.values(internetProfiles).map(({ label, icon: Icon, href }) => (
        <Anchor
          aria-label={label}
          className="text-zinc-500 hover:text-zinc-600 transition-colors"
          href={href}
          key={href}
        >
          <Icon className="size-5" />
        </Anchor>
      ))}
    </div>
  );
}
