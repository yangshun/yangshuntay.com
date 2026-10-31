import { Anchor } from './anchor';

const links = [
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Resume',
    href: '/resume',
  },
];

export function NavLinks() {
  return (
    <ul className="text-sm flex flex-wrap gap-x-2 border border-zinc-200 px-4 rounded-full shadow-xs transition">
      {links.map(({ label, href }) => (
        <li key={href}>
          <Anchor
            className="block text-zinc-500 hover:text-zinc-700 transition-colors font-medium py-2 px-2"
            href={href}
          >
            {label}
          </Anchor>
        </li>
      ))}
    </ul>
  );
}
