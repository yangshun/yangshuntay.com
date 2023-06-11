import Link from 'next/link';

const links = [
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Resume',
    href: '/resume',
  },
];

export default function NavLinks() {
  return (
    <ul className="text-sm flex flex-wrap gap-x-2 border border-zinc-200 px-4 rounded-full shadow-sm hover:shadow-md transition">
      {links.map(({label, href}) => (
        <li key={href}>
          <Link
            className="block text-zinc-500 hover:text-zinc-700 transition-colors font-medium py-2 px-2"
            href={href}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
