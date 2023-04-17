import {ReactElement} from 'react';

const internetProfiles = {
  github: {
    label: 'GitHub',
    href: 'https://github.com/yangshun',
  },
  stackoverflow: {
    label: 'StackOverflow',
    href: 'https://stackoverflow.com/u/1751946',
  },
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yangshun',
  },
  medium: {
    label: 'Medium',
    href: 'https://medium.com/@yangshun',
  },
  twitter: {
    label: 'Twitter',
    href: 'https://twitter.com/yangshunz',
  },
  facebook: {
    label: 'Facebook',
    href: 'https://facebook.com/yangshun',
  },
};

function intersperse(items: ReadonlyArray<ReactElement>) {
  if (items.length < 1) {
    return items;
  }

  const arr = [items[0]];
  for (let i = 1; i < items.length; i++) {
    arr.push(<PipeSeparator key={i} />);
    arr.push(items[i]);
  }

  return arr;
}

function PipeSeparator() {
  return <span>|</span>;
}

export default function ProfileLinks() {
  return (
    <div className="text-sm flex flex-wrap gap-x-2">
      {intersperse(
        Object.values(internetProfiles).map(({label, href}) => (
          <a
            className="text-orange-600 hover:text-orange-700 hover:underline"
            href={href}
            key={href}
            rel="noreferrer noopener"
            target="_blank">
            {label}
          </a>
        )),
      )}
    </div>
  );
}
