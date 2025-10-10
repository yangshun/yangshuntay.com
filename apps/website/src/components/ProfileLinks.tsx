import {
  BsGithub,
  BsLinkedin,
  BsTwitterX,
  BsMedium,
  BsStackOverflow,
} from 'react-icons/bs';

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
    href: 'https://x.com/yangshunz',
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

export default function ProfileLinks() {
  return (
    <div className="text-sm flex flex-wrap gap-x-4">
      {Object.values(internetProfiles).map(({label, icon: Icon, href}) => (
        <a
          aria-label={label}
          className="text-zinc-500 hover:text-zinc-600 transition-colors"
          href={href}
          key={href}
          rel="noreferrer noopener"
          target="_blank">
          <Icon className="size-5" />
        </a>
      ))}
    </div>
  );
}
