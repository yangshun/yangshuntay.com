import { ProfileLinks } from './profile-links';

export function Footer() {
  return (
    <footer className="pt-12 grid gap-y-6">
      <hr />
      <div className="flex gap-x-12 justify-between">
        <span className="text-sm text-zinc-600">
          {new Date().getFullYear()} © Yangshun Tay
        </span>
        <ProfileLinks />
      </div>
    </footer>
  );
}
